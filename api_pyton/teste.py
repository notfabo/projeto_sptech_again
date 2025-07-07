from langchain_community.utilities.sql_database import SQLDatabase
from langchain_community.agent_toolkits import SQLDatabaseToolkit
from langchain_core.prompts import ChatPromptTemplate
from langchain.agents.agent_types import AgentType
from langchain_community.agent_toolkits import create_sql_agent
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import mysql.connector
import json
import os
import time

load_dotenv()

OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]
RDS_URL = os.environ["RDS_URL"]

def sanitize_json_output(output: str) -> str:
    return output.strip().replace('\\', '')

def generateInsight():
    db = SQLDatabase.from_uri(RDS_URL)
    llm = ChatOpenAI(temperature=0.1, openai_api_key=OPENAI_API_KEY, model="gpt-4o-mini")
    # llm = ChatOpenAI(temperature=0.1, openai_api_key=OPENAI_API_KEY, model="gpt-4o")
    toolkit = SQLDatabaseToolkit(db=db, llm=llm)

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system",
            """You are a highly intelligent AI assistant, connected to a database called “againdb”. Your main function is to help HPE salespeople identify sales opportunities and resell products, generating structured, short and objective action plans. Its aim is to provide a personalized action plan that helps the salesperson maximize their sales.

            ### Database Context ###
            The "againdb" database is made up of a total of 14 tables.
                    
            - **Gerente**: Contains manager data (id, nome, email, senha).
            - **Produto**: Records product information (id, nome, preco, descricao, categoria, geração).
            - **Promoção**: Lists promotions (id, titulo, descricao, desconto, validade).
            - **Vendedor**: Stores salesperson data (id, nome, email, senha, fk_gerente).
            - **Compra**: Details purchases made (id, quantidade, valor, data_compra, fk_produto, fk_vendedor, fk_cliente).
            - **Cliente**: Stores customer information (id, nome, CNPJ, embarque, area, fk_representante).
            - **Oportunidade**: Records opportunities (id, vendedor, produto, cliente, motivo, plano_de_acao, custo, data_criacao).
            - **Feedback**: Contains feedback on opportunities (id, fk_opportunity, autor_tipo, fk_autor, rating_feedback, comentario_feedback, motivo_feedback, objetivo_feedback, estrategia_feedback, data_feedback).

            The other tables like contato, cliente_contato, vendedor_produto, vendedor_cliente and their respective association tables create relationships between the main entities (such as clients, products, etc.) and allow the organization and tracking of data like contacts and sales or promotion relationships in multiple contexts.

            ### Response Instructions ###
            -Always answer in Brazilian Portuguese 
            -The end result should be a structured action plan in JSON format, with the following fields:
                **Seller**:Name of seller.
                **Product*:Product to be sold.
                **Customer**:Customer's name.
                **Reason**:Reason for the opportunity.
                **Objective**:Objective of the action plan.
                **Strategy**:Strategy to be followed.
                **Cost**:A random number between 0.8 and 5.0.
            - Use joins to correlate tables if necessary.
            -Analyze purchase history, feedback and opportunities in the database to avoid redundancy and ensure relevance.
            - Offer plausible justifications for each opportunity recommendation.
            - Avoid creating identical action plans; personalize each opportunity.
            - Make very detailed strategies that the salesperson can really use and that make sense with the objective, motive and client.
            - Make sure the plans are concise, direct and practical.
            - Always create complete strategies.
            - Never create action plans that are identical to existing ones.
            - Always go through the opportunities table so as not to create an existing opportunity.
            - In the reason field, a real reason and not a generic one, really the reason why you created this opportunity, why you identified and generated the opportunity.
            - Always return the answer in the following JSON format:

            Response Examples:

            1. Example
            {{
                "Vendedor": "Abner Moreira Nunes",
                "Produto": "HPE Proliant DL380 (Gen11)",
                "Cliente": "Mercedes",
                "Motivo": "O cliente já adquiriu este modelo recentemente e, com o crescimento da demanda no setor automotivo, pode precisar expandir sua infraestrutura de TI para novos projetos",
                "Objetivo": "Agendar uma reunião com o responsável de TI da Mercedes para entender os desafios atuais e as perspectivas de crescimento, apresentar um estudo de caso com empresas similares que ampliaram seus data centers usando o HPE Proliant DL380, oferecer o "Desconto Progressivo", destacando os benefícios financeiros de adquirir mais unidades em uma única compra e propor um plano de suporte técnico personalizado que assegure uptime e desempenho elevado para os servidores adicionais.",
                "Custo": "2.42"
            }}

            2. Example
            {{
                "Vendedor": "Victor Lage",
                "Produto": "HPE Alletra Storage 4140",
                "Cliente": "Claro",
                "Motivo": "O cliente Claro comprou recentemente servidores da HPE e pode precisar de maior capacidade de armazenamento para lidar com novos dados",
                "Objetivo": "Inserir o cliente Claro em um ciclo contínuo de renovação e ampliação de infraestrutura",
                "Estratégia": "Realizar uma análise da infraestrutura atual do cliente e identificar gargalos de armazenamento, demonstrar como o HPE Alletra Storage 4140, com sua densidade e desempenho equilibrados, pode resolver essas limitações, Oferecer o "Combo Servidor + Suporte" como uma solução integrada, enfatizando o gerenciamento centralizado com a plataforma HPE GreenLake e disponibilizar uma POC (Prova de Conceito) para o cliente testar o produto por 30 dias.",
                "Custo": "3.29"
            }}

            3. Example
            {{
                "Vendedor": "Renata Souza",
                "Produto": "HPE Alletra Storage Server 4120",
                "Cliente": "Spacex",
                "Motivo": "O cliente Spacex comprou servidores recentemente e, devido à natureza de seus projetos aeroespaciais, pode precisar de maior capacidade de armazenamento",
                "Objetivo": "Atender a demandas futuras e fidelizar o cliente com soluções integradas e escaláveis",
                "Estratégia": "Identificar os principais projetos atuais e futuros da Spacex que podem demandar maior capacidade de armazenamento, preparar uma apresentação destacando como o HPE Alletra 4120 atende às necessidades de desempenho e confiabilidade exigidas por projetos de alta complexidade, oferecer uma proposta de financiamento via HPE Financial Services, tornando a aquisição mais atrativa financeiramente e propor um contrato de suporte premium para maximizar a eficiência operacional e garantir uma experiência de nuvem completa.",
                "Custo": "2.95"
            }}

            4. Example
            {{
                "Vendedor": "Roberto Lima",
                "Produto": "Aruba 2930F 12G PoE+ Switch",
                "Cliente": "Petrobras",
                "Motivo": "O cliente relatou desafios relacionados à conectividade de rede e poderia melhorar sua infraestrutura de rede com este produto",
                "Objetivo": "Facilitar a transição para uma infraestrutura de rede moderna e integrada",
                "Estratégia": "Solicitar uma visita técnica à Petrobras para mapear a atual arquitetura de rede, criar um relatório com recomendações, mostrando como o Aruba 2930F pode melhorar o desempenho da rede e reduzir falhas, apresentar uma oferta especial com instalação e configuração inclusas, aproveitando a "Promoção de Verão"e garantir suporte técnico prioritário no primeiro ano após a compra.",
                "Custo": "2.52"
            }}
            """
            ),
            ("user", "{question} ai: ")
        ]
    )

    db_agent = create_sql_agent(
        llm=llm,
        toolkit=toolkit,
        verbose=True,
        agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        max_executions=100,
        max_iterations=1000,
        handle_parsing_errors=True
    )

    response = db_agent.invoke(prompt.format_prompt(question="Write the best possible action plan, look at the customers, the data and analyze what would be the best opportunity for a resale or sale, talking about the salesperson, the product chosen to be sold, the customer, the reason for creating this opportunity, the objective, a strategy to succeed in selling, without repeated plans."), return_only_outputs=True)
    text = response['output']

    if not text.strip():
        print(f"Erro: O plano de ação gerado está vazio.")
        return None
    
    raw_text = text.strip()
    if raw_text.startswith('```json') and raw_text.endswith('```'):
        raw_text = raw_text[7:-3]

    try:
        action_plan_json = json.loads(raw_text)
    except json.JSONDecodeError as e:
        print(f"Erro ao decodificar o JSON: {e}")
        print(f"Texto recebido: {raw_text}")
        return None

    return action_plan_json

def insert_into_database(action_plan):
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="#Gf38328401843",
        database="againdb"
    )

    mycursor = mydb.cursor()

    sql = """
        INSERT INTO oportunidade 
        (vendedor, produto, cliente, motivo, objetivo, plano_de_acao, cost, data_criacao)
        VALUES (%s, %s, %s, %s, %s, %s, %s, NOW())
    """

    if isinstance(action_plan, dict):
        action_plan_dict = action_plan
    else:
        action_plan_dict = json.loads(action_plan)

    val = (
        action_plan_dict.get('Vendedor'),
        action_plan_dict.get('Produto'),
        action_plan_dict.get('Cliente'),
        action_plan_dict.get('Motivo'),
        action_plan_dict.get('Objetivo'),
        action_plan_dict.get('Estratégia'),
        action_plan_dict.get('Custo'),
    )
    
    if None in val[:6]:
        print("Erro: Faltam dados no plano de ação.")
        print(val)
        return

    mycursor.execute(sql, val)
    mydb.commit()

    print(mycursor.rowcount, "registro inserido.")

    mycursor.close()
    mydb.close()

while True:
    try:
        action_plan_json = generateInsight()
        print("Action Plan JSON:", action_plan_json)

        if not action_plan_json:
            print("Erro: Plano de ação não foi gerado ou está inválido. Tentando novamente em 2 segundos...")
            time.sleep(2)  
            continue

        try:
            insert_into_database(action_plan_json)
            print("Plano de ação inserido com sucesso no banco de dados.")
        except mysql.connector.Error as db_err:
            print(f"Erro ao inserir no banco de dados: {db_err}")
            print("Gerando um novo plano de ação...")
            continue

        time.sleep(10) 
        # time.sleep(1200) 

    except Exception as e:
        print(f"Erro inesperado: {e}")
        print("Tentando novamente em 2 segundos...")
        time.sleep(2)  
    # action_plan_json= generateInsight()
    # print("Action Plan JSON:", action_plan_json)
    # insert_into_database(action_plan_json)
    # time.sleep(1200)