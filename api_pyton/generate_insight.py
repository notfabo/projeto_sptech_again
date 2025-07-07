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
    output = output.replace('\\', '')
    output = output.strip()
    return output

def generate_insight():
    db = SQLDatabase.from_uri(RDS_URL)
    llm = ChatOpenAI(temperature=0.1, openai_api_key=OPENAI_API_KEY, model="gpt-4o-mini")
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
        - Always go through the opportunities table so that you don't create an existing opportunity with the same salesperson, product and customer.
        - In the reason field, create a real reason and not a generic one, really the reason why you created this opportunity, why you identified and generated the opportunity.
        - Always return the answer in the following JSON format:

        Response Examples:

        1. Example
        {{
            "Vendedor": "Abner Moreira Nunes",
            "Produto": "HPE Proliant DL380 (Gen11)",
            "Cliente": "Mercedes",
            "Motivo": "O cliente já adquiriu este modelo recentemente e, com o crescimento da demanda no setor automotivo, pode precisar expandir sua infraestrutura de TI para novos projetos",
            "Objetivo": "Pesquisa Prévia: Levante informações sobre os novos projetos da Mercedes e possíveis desafios de TI relacionados. Reunião Personalizada: Agende uma reunião com o gestor de TI da Mercedes para apresentar como o HPE Proliant DL380 pode continuar atendendo suas necessidades de forma escalável. Demonstração de Valor: Mostre estudos de caso de empresas similares que aumentaram a eficiência operacional com a ampliação de seus servidores DL380. Oferta Financeira: Proponha o "Desconto Progressivo", destacando os benefícios financeiros da compra em volume e inclua suporte técnico gratuito por um ano. Encerramento com Urgência: Utilize a data limite da promoção como incentivo para o fechamento rápido da compra.",
            "Custo": "2.42"
        }}

        2. Example
        {{
            "Vendedor": "Victor Lage",
            "Produto": "HPE Alletra Storage 4140",
            "Cliente": "Claro",
            "Motivo": "O cliente Claro comprou recentemente servidores da HPE e pode precisar de maior capacidade de armazenamento para lidar com novos dados",
            "Objetivo": "Inserir o cliente Claro em um ciclo contínuo de renovação e ampliação de infraestrutura",
            "Estratégia": "Diagnóstico Inicial: Realize uma análise gratuita da infraestrutura de armazenamento da Claro para identificar gargalos. Proposta Técnica: Apresente o HPE Alletra Storage 4140 como a solução ideal para atender às novas demandas, destacando sua densidade e desempenho. Benefício Adicional: Ofereça um pacote promocional com instalação e configuração inclusas, além de descontos via "Combo Servidor + Suporte". Demonstração Prática: Disponibilize uma prova de conceito (POC) para que o cliente experimente os benefícios do produto. Fechamento Atrativo: Garanta suporte técnico especializado durante o primeiro ano, sem custo adicional. ",
            "Custo": "3.29"
        }}

        3. Example
        {{
            "Vendedor": "Renata Souza",
            "Produto": "HPE Alletra Storage Server 4120",
            "Cliente": "Spacex",
            "Motivo": "O cliente Spacex comprou servidores recentemente e, devido à natureza de seus projetos aeroespaciais, pode precisar de maior capacidade de armazenamento",
            "Objetivo": "Atender a demandas futuras e fidelizar o cliente com soluções integradas e escaláveis",
            "Estratégia": "Identificação de Necessidades: Agende uma reunião para discutir os desafios de armazenamento relacionados aos projetos em andamento da Spacex. Proposta Personalizada: Destaque como o HPE Alletra 4120 pode oferecer o equilíbrio ideal entre desempenho e economia para grandes volumes de dados. Apresentação Técnica: Ofereça um webinar para a equipe técnica da Spacex sobre o uso estratégico de infraestrutura de armazenamento para projetos complexos. Oferta Exclusiva: Proponha financiamento via HPE Financial Services e inclua suporte técnico prioritário por um ano. Prova de Valor: Disponibilize uma prova de conceito com integração inicial para validar o desempenho do produto no ambiente da Spacex.",
            "Custo": "2.95"
        }}

        4. Example
        {{
            "Vendedor": "Roberto Lima",
            "Produto": "Aruba 2930F 12G PoE+ Switch",
            "Cliente": "Petrobras",
            "Motivo": "O cliente relatou desafios relacionados à conectividade de rede e poderia melhorar sua infraestrutura de rede com este produto",
            "Objetivo": "Facilitar a transição para uma infraestrutura de rede moderna e integrada",
            "Estratégia": "Diagnóstico Técnico: Ofereça uma análise detalhada da infraestrutura de rede atual da Petrobras, identificando áreas críticas. Proposta de Solução: Mostre como o Aruba 2930F aumenta a eficiência da rede, reduzindo interrupções e melhorando a conectividade. Diferenciais do Produto: Destaque os recursos de segurança e gerenciamento avançados do Aruba 2930F, otimizados para grandes redes corporativas. Oferta Completa: Inclua no pacote a instalação, configuração e treinamento da equipe técnica da Petrobras. Fechamento com Incentivo: Utilize a "Promoção de Verão" para oferecer descontos significativos e criar senso de urgência.",
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

    response = db_agent.invoke(prompt.format_prompt(question="Write the best possible action plan, look at the customers, the data and analyze what would be the best opportunity for a resale or sale, talking about the salesperson, the product chosen to be sold, the customer, the reason for creating this opportunity, the objective, a strategy to succeed in the sale, without repetitive and identical plans, a plan that the salesperson can really use."), return_only_outputs=True)
    text = response['output']

    if not text.strip():
        print(f"Erro: O plano de ação gerado está vazio.")
        return None

    raw_text = text.strip()
    if raw_text.startswith('```json') and raw_text.endswith('```'):
        raw_text = raw_text[7:-3]

    try:
        action_plan_json = json.loads(raw_text)
        print(f"JSON gerado com sucesso: {action_plan_json}")
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