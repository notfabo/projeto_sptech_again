USE againdb;

INSERT INTO gerente (nome, email, senha) VALUES ('Luan Viana Leite', 'luan.viana@hpe.com', 'senha123');

INSERT INTO produto (nome, preco, descricao, categoria, geracao) VALUES ('HPE Proliant DL320', 50000.00, 'Você deseja executar cargas de trabalho de IA de ponta, como Visão Computacional, que precisam de aceleradores de GPU ou soluções de dados distribuídas que exigem armazenamento expansível? O HPE ProLiant DL320 Gen11 é um servidor 1U 1P com um design modular exclusivo, compacto e orientado para carga de trabalho, desenvolvido especificamente para computação de borda, oferecendo desempenho excepcional com economia 1P e uma excelente opção para cargas de trabalho virtualizadas e em contêineres.', 'Processamento', '11'),
                                                                        ('HPE Proliant DL380',150000.00,'Adaptáveis a diversas cargas de trabalho e ambientes, os servidores HPE ProLiant DL380 Gen11 seguros 2P 2U oferecem desempenho de classe mundial com o equilíbrio certo entre capacidade de expansão e escalabilidade. Projetado para versatilidade e resiliência supremas e ao mesmo tempo apoiado por uma garantia abrangente, torna-o ideal para vários ambientes, de contêineres a nuvem e Big Data. Padronize na plataforma de computação mais confiável do setor.','Processamento','11'),
                                                                        ('HPE Proliant DL360',125000.00,'Adaptável a diversas cargas de trabalho e ambientes, o HPE ProLiant DL360 Gen10 Plus seguro 2P 2U oferece desempenho de classe mundial com o equilíbrio certo entre capacidade de expansão e escalabilidade. Projetado para versatilidade e resiliência supremas e ao mesmo tempo apoiado por uma garantia abrangente, o torna ideal para vários ambientes, de contêineres a nuvem e Big Data. Padronize na plataforma de computação mais confiável do setor.','Processamento','10 Plus'),
                                                                        ('HPE Proliant DL340',100000.00,'Adaptável a diversas cargas de trabalho e ambientes, o HPE ProLiant DL34''0 Gen10 seguro 2P 2U oferece desempenho de classe mundial com o equilíbrio certo entre capacidade de expansão e escalabilidade. Projetado para versatilidade e resiliência supremas e ao mesmo tempo apoiado por uma garantia abrangente, o torna ideal para vários ambientes, de contêineres a nuvem e Big Data. Padronize na plataforma de computação mais confiável do setor.','Processamento','10'),
                                                                        ('HPE Apollo 2000',200000.00,'A HPE está levando o poder da supercomputação para datacenters de qualquer tamanho com o sistema Apollo 2000 Gen10 Plus. O sistema HPE Apollo 2000 Gen10 Plus é uma plataforma densa de vários servidores que oferece incrível desempenho e flexibilidade de carga de trabalho em um pequeno espaço de datacenter, ao mesmo tempo em que oferece a eficiência de uma infraestrutura compartilhada. Ele foi projetado para fornecer uma ponte para a arquitetura escalável para data centers tradicionais, para que os clientes corporativos e PME possam obter o valor da economia de espaço da infraestrutura com densidade otimizada de maneira econômica e sem interrupções.','Processamento','10 Plus'),
                                                                        ('HPE Apollo 6500',300000.00,'Construídos para a Era Exascale, os sistemas HPE Apollo 6500 Gen10 Plus aceleram o desempenho com GPUs NVIDIA HGX A100 Tensor Core com NVLink ou AMD InstinctTM MI200 com Link Infinity FabricTM de 2ª geração para assumir as cargas de trabalho mais complexas de HPC e IA. Essa plataforma desenvolvida especificamente oferece desempenho aprimorado com GPUs de primeira linha, interconexões rápidas de GPU, malha de alta largura de banda e topologia de GPU configurável, proporcionando confiabilidade, disponibilidade e capacidade de manutenção (RAS) sólidas.','Processamento','10 Plus'),
                                                                        ('HPE Alletra 9000',3000000.00,'O seu armazenamento de classe empresarial está impedindo você porque você está preso à administração, ao ajuste e ao suporte da infraestrutura? Você deseja mudar do gerenciamento de nuvens distintas para uma experiência de nuvem em qualquer lugar com a mesma agilidade, simplicidade e consumo de nuvem para cada aplicativo? O HPE Alletra 9000 é ideal para cargas de trabalho de missão crítica com extrema sensibilidade de latência e requisitos de disponibilidade. É ideal para um ambiente que exige uma área densa de data center.','Armazenamento','9000'),
                                                                        ('HPE Alletra Storage 6000',1000000.00,'Experimente o poder da previsão. O seu armazenamento de classe empresarial está impedindo você porque você está preso à administração, ao ajuste e ao suporte da infraestrutura? Você deseja migrar para uma experiência de nuvem em qualquer lugar com a mesma agilidade, simplicidade e consumo de nuvem para todas as aplicações? O HPE Alletra potencializa seus dados de ponta a ponta com a experiência de nuvem para todos os seus aplicativos. Para cargas de trabalho críticas aos negócios.','Armazenamento','6000'),
                                                                        ('HPE Alletra 5000',750000.00,'Construído a partir do DNA do HPE Nimble Storage Adaptive Flash Array, o HPE Alletra 5000 oferece armazenamento híbrido simples, confiável e econômico – projetado de forma adaptativa para cargas de trabalho primárias e secundárias mistas. Leve a experiência de nuvem para seu armazenamento local com gerenciamento de nuvem por meio da plataforma HPE GreenLake Edge to Cloud – simplificando as operações em todo o ciclo de vida, desde a implantação até o provisionamento e atualizações.','Armazenamento','5000'),
                                                                        ('HPE Alletra Storage Server 4140',550000.00,'Você está procurando uma infraestrutura de dados baseada em servidor com a mais alta densidade de capacidade de armazenamento e desempenho equilibrado para iniciativas orientadas por dados em massa? O servidor de armazenamento HPE Alletra 4140 foi projetado especificamente para fornecer alto rendimento para as maiores cargas de trabalho centradas em armazenamento para potencializar suas iniciativas orientadas por dados. Desde arquivos profundos e proteção de dados até data lakes de análise ativa, armazenamento definido por software de arquivos e objetos e muito mais, os dois chassis oferecem os recursos que você precisa com economia ideal, segurança confiável e experiência operacional em nuvem.','Armazenamento','4000'),
                                                                        ('HPE Alletra Storage Server 4120',500000.00,'Você está procurando uma infraestrutura de dados baseada em servidor com um equilíbrio ideal entre desempenho e capacidade econômica para iniciativas orientadas por dados? O servidor de armazenamento HPE Alletra 4120 foi projetado especificamente para executar a mais ampla variedade de cargas de trabalho com uso intensivo de armazenamento de dados para levar suas iniciativas orientadas a dados ao sucesso. Desde data lakes analíticos e armazenamento definido por software de arquivos e objetos de uso geral até arquivos ativos, proteção de dados convergentes e muito mais, ele oferece os recursos que você precisa com economia ideal, segurança confiável e experiência operacional em nuvem.','Armazenamento','4000'),
                                                                        ('HPE Alletra Storage Server 4110',450000.00,'Você está procurando uma infraestrutura de dados baseada em servidor com desempenho excepcional para acelerar iniciativas orientadas por dados? O servidor de armazenamento HPE Alletra 4110 foi projetado especificamente para executar suas cargas de trabalho com uso intensivo de armazenamento de dados que exigem mais desempenho para levar suas iniciativas orientadas a dados ao sucesso. Desde armazenamentos de dados para aprendizado de máquina (ML) e análises até bancos de dados distribuídos e NoSQL, armazenamento definido por software sensível ao desempenho e infraestrutura hiperconvergente com muitos dados, ele oferece os recursos necessários com economia ideal, segurança confiável e experiência operacional em nuvem.','Armazenamento','4000'),
                                                                        ('Aruba 2930F 12G PoE+ 2G/2SFP+ Switch',10000.00,'O switch HPE Aruba Networking série 2930F foi projetado para clientes que criam locais de trabalho digitais inteligentes otimizados para usuários móveis com uma abordagem integrada com e sem fio. Esses convenientes switches de rede Camada 3 incluem uplinks integrados e energia PoE e são simples de implantar e gerenciar com ferramentas avançadas de segurança e gerenciamento de rede, como HPE Aruba Networking ClearPass Policy Manager, Aruba AirWave e HPE Aruba Networking Central baseado em nuvem. Um poderoso HPE Aruba Networking ProVision ASIC oferece desempenho, suporte robusto a recursos e valor com programabilidade para os aplicativos mais recentes.','Network','12900E'),
                                                                        ('Aruba 3800 24SFP 2SFP+ Switch',50000.00,'A série de switches Aruba 3800 é uma família de nove switches Gigabit Ethernet totalmente gerenciados, disponíveis em modelos de 24 e 48 portas, com ou sem PoE+, e com uplinks SFP+ ou 10GBASE-T. A série de switches 3800 utiliza a mais recente tecnologia ProVision ASIC e avanços na engenharia de hardware para fornecer um dos switches mais resilientes e com maior eficiência energética do setor. Além disso, a tecnologia de empilhamento em malha é implementada nesta série de switches para fornecer resiliência semelhante à de um chassi em um formato flexível e empilhável.','Network','12900E'),
                                                                        ('HPE Networking Comware Switch Chassis 12916E',15000.00,'O switch HPE Networking Comware série 12900E é um switch central modular de próxima geração para data center, projetado para oferecer suporte a data centers virtualizados e às crescentes necessidades de implantações de nuvem privada e pública. O switch HPE Networking Comware 12900E oferece níveis sem precedentes de desempenho, buffer, escala e disponibilidade com conectividade GbE, 10GbE, 40GbE, 100GbE e 400GbE de alta densidade.','Network','3800'),
                                                                        ('HPE Networking Comware Switch Chassis 12908E',5000.00,'O switch HPE Networking Comware série 12900E é um switch central modular de próxima geração para data center, projetado para oferecer suporte a data centers virtualizados e às crescentes necessidades de implantações de nuvem privada e pública. O switch HPE Networking Comware 12900E oferece níveis sem precedentes de desempenho, buffer, escala e disponibilidade com conectividade GbE, 10GbE, 40GbE, 100GbE e 400GbE de alta densidade.','Network','2930F'),
                                                                        ('HPE SimpliVity 380', 200000.00, 'Uma solução de infraestrutura hiperconvergente que combina recursos de computação, armazenamento e rede em uma única plataforma.', 'Hiperconvergente', '380'),
                                                                        ('HPE Synergy 480 Gen10', 300000.00, 'Uma plataforma de infraestrutura composta que permite a composição rápida e fácil de recursos de computação, armazenamento e rede para atender às necessidades das cargas de trabalho dinâmicas.', 'Infraestrutura', 'Gen10'),
                                                                        -- 1 insert
                                                                        ('HPE Synergy 660 Gen10', 450000.00, 'Uma plataforma de infraestrutura composta projetada para fornecer escalabilidade e flexibilidade em cargas de trabalho de TI.', 'Infraestrutura', 'Gen10'),
																		('HPE SimpliVity 2600', 180000.00, 'Uma solução de infraestrutura hiperconvergente de alto desempenho, compacta e com economia de espaço.', 'Hiperconvergente', '2600'),
																		('HPE MSA 2062', 75000.00, 'Solução de armazenamento flash híbrido projetada para aplicativos de pequenas e médias empresas.', 'Armazenamento', '2062'),
																		('HPE StoreOnce 3640', 120000.00, 'Sistema de backup baseado em nuvem que oferece proteção de dados de alta eficiência.', 'Armazenamento', '3640'),
																		('HPE Nimble Storage HF20', 600000.00, 'Solução de armazenamento flash híbrido para cargas de trabalho com necessidade de desempenho moderado.', 'Armazenamento', 'HF20');

INSERT INTO promocao (titulo, descricao, utilizacao, desconto, validade) VALUES ('Desconto Progressivo', 'Quanto mais servidores você compra, maior o desconto.', 'Aplicar em negociações com clientes que buscam uma grande quantidade de servidores, incentivando compras em volume.', 5, '2024-12-31 23:59:59'),
                                                                                ('Queima de Estoque', 'Descontos imperdíveis em modelos selecionados de servidores.', 'Oferecer para clientes em busca de soluções de custo-benefício, ideal para liquidar modelos antigos.', 15, '2024-06-30 23:59:59'),
                                                                                ('Black Friday de Tecnologia', 'Aproveite a Black Friday para atualizar sua infraestrutura com nossos servidores.', 'Utilizar durante a Black Friday, perfeito para atrair novos clientes e fechar vendas com descontos atrativos.', 25, '2024-11-25 23:59:59'),
                                                                                ('Especial de Ano Novo', 'Comece o ano com uma infraestrutura robusta com nossos servidores em promoção.', 'Recomendar para empresas que estão planejando expansões ou upgrades no início do ano.', 15, '2025-01-05 23:59:59'),
                                                                                ('Promoção de Verão', 'Temperaturas altas, preços baixos! Atualize seu data center no verão.', 'Ideal para oferecer em épocas de calor, quando as empresas buscam melhorar sua infraestrutura.', 25, '2024-07-15 23:59:59'),
                                                                                ('Combo Servidor + Suporte', 'Adquira um servidor bare-metal e ganhe desconto especial no pacote de suporte técnico.', 'Perfeito para clientes que necessitam de servidor junto com suporte técnico, oferecendo um pacote completo.', 20, '2024-09-30 23:59:59'),
                                                                                ('Semana do Consumidor', 'Descontos especiais para celebrar a semana do consumidor.', 'Oferecer durante a semana do consumidor para atrair mais clientes.', 10, '2024-03-15 23:59:59'),
                                                                                ('Inauguração de Novo Data Center', 'Descontos para clientes que estão inaugurando novos data centers.', 'Recomendar para empresas em fase de expansão de infraestrutura.', 20, '2024-09-01 23:59:59'),
                                                                                -- 1 insert
                                                                                ('Desconto de Aniversário', 'Celebre o aniversário da empresa com descontos especiais em servidores selecionados.', 'Utilizar em compras realizadas no mês de aniversário da empresa.', 20, '2024-10-31 23:59:59'),
																				('Semana da Tecnologia', 'Aproveite os descontos durante a Semana da Tecnologia para renovar seu parque de servidores.', 'Recomendar durante a Semana da Tecnologia.', 15, '2024-11-07 23:59:59');



INSERT INTO vendedor (nome, email, senha, aprovado, fk_gerente) VALUES 
    ('Abner Moreira Nunes', 'abner.nunes@hpe.com', 'senha123', TRUE, 1), # 1
    ('Matheus Pantaleao', 'matheus.pantaleao@hpe.com', 'senha123', FALSE, 1), # 2
    ('Marcus Vinicius Goncalves', 'marcus-vinicius.goncalves@hpe.com', 'pintopolis123', FALSE, 1), # 3
    ('Marcos Antonio Campo Junior', 'marco-antonio.campos@hpe.com', 'senha123', FALSE, 1), # 4
    ('Victor Lage', 'victor.lage@hpe.com', 'senha123', FALSE, 1),  # 5
    ('Juliana Almeida', 'juliana.almeida@hpe.com', 'senha123', FALSE, 1), # 6
    ('Roberto Lima', 'roberto.lima@hpe.com', 'senha123', FALSE, 1), # 7
    -- Adicionando mais 3 vendedores
    ('Fernanda Silva', 'fernanda.silva@hpe.com', 'senha123', FALSE, 1), # 8
    ('Lucas Pereira', 'lucas.pereira@hpe.com', 'senha123', FALSE, 1), # 9
    ('Renata Souza', 'renata.souza@hpe.com', 'senha123', FALSE, 1); # 10


INSERT INTO representante (nome, telefone, email) VALUES ('Ana Silva', '(11) 999999999', 'ana.silva@exemplo.com'), #Mercedes 2 contatos 1 pre-compra 1 compra
                                                         ('Carlos Souza', '(21) 888888888', 'carlos.souza@exemplo.com'), #Ford 2 contatos 1 pre-compra 1 compra
                                                         ('Fernanda Costa', '(31) 777777777', 'fernanda.costa@exemplo.com'), #Meta 6 cotatos 2 pre-compra 2 compra 1 duvida implantação 1 duvidada geral
                                                         ('Eduardo Pereira', '(41) 666666666', 'eduardo.pereira@exemplo.com'), #Disney 3 contatos 1 pre-compra 1 compra 1 duvidade implantação -- 1 orçamento switch 1 compra switch
                                                         ('Gabriela Ribeiro', '(51) 555555555', 'gabriela.ribeiro@exemplo.com'), #Vivo 3 contatos 1 pre-compra 1 compra 1 duvidade implantação
                                                         ('Ricardo Almeida', '(61) 444444444', 'ricardo.almeida@exemplo.com'), #Claro 3 contatos 1 pre-compra 1 compra 1 duvidade implantação -- 1 orçamento switch 1 compra switch
                                                         ('Mariana Dias', '(71) 333333333', 'mariana.dias@exemplo.com'), #Santander 4 cotatos 1 pre-compra 1 compra 1 duvida implantação 1 duvidada geral
                                                         ('Tiago Oliveira', '(81) 222222222', 'tiago.oliveira@exemplo.com'), #Spacex 5 cotatos 1 conhecendo o produto 1 pre-compra 1 compra 1 duvida implantação 1 duvidada geral
                                                         ('Patrícia Lima', '(91) 111111111', 'patricia.lima@exemplo.com'), #Petrobras 7 cotatos 1 conhecendo o produto 2 pre-compra 2 compra 1 duvida implantação 1 duvidada geral
                                                         ('Roberto Santos', '(11) 000000000', 'roberto.santos@exemplo.com'), #Bmw 2 contatos 1 pre-compra 1 compra
                                                         ('Pedro Elias', '(11) 898988989', 'pedro.elias@exemplo.com'), #Tivit 1 pre-compra 1 compra
                                                         ('Luiz Felipe', '(31) 99998888', 'luiz.felipe@exemplo.com'),
                                                         ('Camila Moreira', '(21) 99997777', 'camila.moreira@exemplo.com'),
                                                         -- 1 INSERT 
                                                         ('Paula Ferreira', '(11) 123456789', 'paula.ferreira@exemplo.com'),
                                                         ('Lucas Martins', '(11) 999123123', 'lucas.martins@exemplo.com'), 
														('Isabela Rocha', '(21) 888321321', 'isabela.rocha@exemplo.com'), 
														('Rafael Azevedo', '(31) 777987987', 'rafael.azevedo@exemplo.com'), 
														('Sofia Mendes', '(41) 666654654', 'sofia.mendes@exemplo.com'), 
														('Gustavo Ferreira', '(51) 555852852', 'gustavo.ferreira@exemplo.com'), 
														('Larissa Almeida', '(61) 444159159', 'larissa.almeida@exemplo.com'), 
														('Felipe Costa', '(71) 333753753', 'felipe.costa@exemplo.com'), 
														('Juliana Moreira', '(81) 222357357', 'juliana.moreira@exemplo.com'), 
														('Matheus Oliveira', '(91) 111951951', 'matheus.oliveira@exemplo.com'), 
														('Carolina Souza', '(11) 000258258', 'carolina.souza@exemplo.com'), 
														('Henrique Silva', '(11) 898321654', 'henrique.silva@exemplo.com'), 
														('Renata Lima', '(31) 999147147', 'renata.lima@exemplo.com'),
                                                        -- Inserindo novos representantes
														('Marcelo Farias', '(11) 912345678', 'marcelo.farias@exemplo.com'), 
														('Tatiana Menezes', '(21) 934567891', 'tatiana.menezes@exemplo.com'), 
														('Claudio Soares', '(31) 956789012', 'claudio.soares@exemplo.com'), 
														('Renata Guimarães', '(41) 978901234', 'renata.guimaraes@exemplo.com'), 
														('Thiago Monteiro', '(51) 990123456', 'thiago.monteiro@exemplo.com'), 
														('Beatriz Carvalho', '(61) 911234567', 'beatriz.carvalho@exemplo.com'), 
														('Fernando Almeida', '(71) 922345678', 'fernando.almeida@exemplo.com'), 
														('Luciana Barros', '(81) 933456789', 'luciana.barros@exemplo.com'), 
														('Rodrigo Silva', '(91) 944567890', 'rodrigo.silva@exemplo.com'), 
														('Aline Pereira', '(11) 955678901', 'aline.pereira@exemplo.com');

INSERT INTO cliente (nome, CNPJ, embarque, area, fk_representante) VALUES ('Mercedes','16855567000180','2022-04-12','Fabricante de automóveis', 1),
                                                                          ('Ford','77440158000107','2022-05-20','Fabricante de automóveis',2),
                                                                          ('Meta','66833199000147','2022-07-15','Tecnologia',3),
                                                                          ('Disney','70418743000161','2022-12-07','Entreterimento',4),
                                                                          ('Vivo','75239865000104','2022-08-01','Telefonia',5),
                                                                          ('Claro','77783007000151','2022-01-14','Telefonia',6),
                                                                          ('Santander','55751452000105','2022-06-15','Banco',7),
                                                                          ('Spacex','71205096000172','2022-02-22','Fabricante de sistemas aeroespaciais',8),
                                                                          ('Petrobras','69639994000197','2022-02-10','Energia',9),
                                                                          ('Bmw','17237951000181','2022-03-08','Fabricante de automóveis',10),
                                                                          ('Tivit','17237951111181','2022-04-06','Soluções Digitais',11),
                                                                          ('Apple', '12345678000190', '2022-09-15', 'Tecnologia', 12),
                                                                          ('Google', '98765432000180', '2022-11-01', 'Tecnologia', 13),
                                                                          -- 1 INSERT 
                                                                          ('Microsoft', '32456789000123', '2022-09-01', 'Tecnologia', 14),
                                                                          ('Nissan', '13245678000190', '2022-01-20', 'Fabricante de automóveis', 15),
																			('Itaú', '21436587000123', '2022-02-18', 'Banco', 16),
																			('Accenture', '34567890000123', '2022-03-15', 'Tecnologia', 17),
																			('Nvidia', '45678901000134', '2022-04-25', 'Tecnologia', 18),
																			('Samsung', '56789012000145', '2022-05-12', 'Tecnologia', 19),
																			('Honda', '67890123000156', '2022-06-10', 'Fabricante de automóveis', 20),
																			('Netflix', '78901234000167', '2022-07-08', 'Entretenimento', 21),
																			('Amazon', '89012345000178', '2022-08-14', 'E-commerce', 22),
																			('Volkswagen', '90123456000189', '2022-09-19', 'Fabricante de automóveis', 23),
																			('IBM', '01234567000190', '2022-10-25', 'Tecnologia', 24),
																			('Tesla', '12345678000201', '2022-11-30', 'Fabricante de automóveis', 25),
																			('Sony', '23456789000312', '2022-12-15', 'Tecnologia', 26),
                                                                           -- Inserindo novos clientes
																			('Ferrari', '98345678000120', '2022-02-10', 'Fabricante de automóveis', 27),
																			('Cisco', '17456789000231', '2022-05-18', 'Tecnologia', 28),
																			('Zoom', '26457890001123', '2022-06-30', 'Tecnologia', 29),
																			('Red Bull', '35467890012034', '2022-04-02', 'Alimentos e bebidas', 30),
																			('PayPal', '44478900123045', '2022-03-14', 'Finanças', 31),
																			('Adobe', '53489001234056', '2022-07-22', 'Software', 32),
																			('BMW Motorrad', '62490102345067', '2022-09-25', 'Motocicletas', 33),
																			('Starbucks', '71401203456078', '2022-08-18', 'Alimentos e bebidas', 34),
																			('Ducati', '80412304567089', '2022-01-11', 'Motocicletas', 35),
																			('Booking.com', '89423405678090', '2022-06-12', 'Viagens', 36);


INSERT INTO compra (quantidade ,valor, data_compra, fk_produto, fk_vendedor, fk_cliente) VALUES	
	-- 2023
    -- Janeiro 01
    (1, 150000.00, '2023-01-12', 9, 1, 1), -- Mercedes 01
    (1, 467500.00, '2023-01-07', 10, 4, 9), -- Ano novo #Petrobras 02
    (1, 500000.00, '2023-01-20', 18, 2, 15), -- Promoção de Ano Novo #Nissan 03
    -- Fevereiro 02
    (3, 318750.00, '2023-02-10', 3, 1, 9), -- Petrobras 06
    (2, 300000.00, '2023-02-18', 17, 4, 16), -- Black Friday #Itaú 07
    (1, 337500.00, '2023-02-22', 12, 4, 8), -- Verão #SpaceX 08
    -- Março 03
    (4, 480000.00, '2023-03-08', 2, 1, 10), -- BMW
    (3, 750000.00, '2023-03-15', 17, 3, 17), -- Lançamento #Accenture 11
    (2, 650000.00, '2023-03-21', 15, 2, 25), -- Nova coleção #Tesla 12
    (5, 500000.00, '2023-03-10', 21, 1, 4), -- Pacote promocional #Disney 13
    (1, 275000.00, '2023-03-29', 22, 3, 15), -- Desconto especial #Nissan 14
    (3, 550000.00, '2023-03-30', 14, 10, 29), -- Inovação tecnológica #Zoom 63
    -- Abril 04
    (1, 2250000.00, '2023-04-12', 7, 3, 4), -- Disney 15
    (2, 600000.00, '2023-04-25', 12, 6, 18), -- Pacote Premium #Nvidia 16
    (1, 160000.00, '2023-04-06', 5, 2, 7), -- Combo #Santander 17
    (4, 42000.00, '2023-04-06', 15, 5, 11), -- #Tivit 18
    -- Maio 05
    (2, 1500000.00, '2023-05-24', 8, 3, 3), -- Black Friday #Meta 21
    (1, 240000.00, '2023-05-12', 6, 2, 3), -- Meta 22
    (1, 10000.00, '2023-05-30', 13, 5, 4), -- Disney 23
    (5, 1000000.00, '2023-05-15', 11, 1, 12), -- Apple 23
    (2, 600000.00, '2023-05-01', 10, 3, 13), -- #Google 2
    -- Junho 06
    (4, 125000.00, '2023-06-10', 19, 1, 19), -- Super sale #Samsung 31
    (2, 250000.00, '2023-06-15', 11, 2, 26), -- Natal #Sony 32
    (2, 450000.00, '2023-06-01', 23, 6, 25), -- Edição limitada #Tesla 33
    (3, 550000.00, '2023-06-25', 12, 2, 17), -- Verão #Accenture 34
    -- Julho 07
    (2, 300000.00, '2023-07-08', 14, 5, 21), -- Oferta especial #Netflix 38
    (1, 1000000.00, '2023-07-12', 15, 1, 22), -- Lançamento de verão #Amazon 39
    (1, 240000.00, '2023-07-15', 6, 2, 3), -- Meta 40
    (4, 48000.00, '2023-07-22', 22, 3, 14), -- Lançamento de coleções #Microsoft 41
    -- Agosto 08
    (2, 650000.00, '2023-08-14', 18, 3, 22), -- Combo #Amazon 44
    (1, 1200000.00, '2023-08-19', 12, 4, 18), -- Pacote Premium #Nvidia 45
    (4, 125000.00, '2023-08-10', 19, 2, 20), -- Liquidação #Honda 46
    (2, 500000.00, '2023-08-05', 10, 1, 23), -- Outono #Volkswagen 47
    -- Setembro 09
    (3, 950000.00, '2023-09-15', 15, 1, 24), -- Festival de descontos #IBM 50
    (1, 1200000.00, '2023-09-12', 23, 6, 25), -- Edição limitada #Tesla 51
    (2, 250000.00, '2023-09-19', 11, 2, 26), -- Natal #Sony 52
    (1, 800000.00, '2023-09-19', 10, 4, 23), -- Outono #Volkswagen 53
    -- Outubro
	(2, 200000.00, '2023-10-01', 5, 3, 14), -- Ano novo #Microsoft 05
    -- Novembro 
	(2, 200000.00, '2023-11-28', 20, 2, 13), -- Google 10
    (2, 320000.00, '2023-11-22', 13, 9, 28), -- Lançamento #Cisco 62

	-- Dezembro
	(1, 160000.00,'2023-12-15',5, 2, 7), #combo 6 #Santander 36
    (2, 450000.00, '2023-12-10', 14, 2, 20), -- liquidação #Honda 37
    (1, 450000.00, '2023-12-10', 10, 9, 32), -- Nova versão #Adobe 66

	-- 2024
    
    -- Janeiro 01
    (1, 150000.00, '2024-01-12', 2, 1, 1), -- Mercedes 01
    (1, 467500.00, '2024-01-07', 10, 4, 9), -- Ano novo #Petrobras 02
    (1, 500000.00, '2024-01-20', 18, 2, 15), -- Promoção de Ano Novo #Nissan 03
    (7, 297500.00, '2024-01-14', 1, 1, 6), -- Queima de estoque #Claro 04
    (2, 200000.00, '2024-01-01', 5, 3, 14), -- Ano novo #Microsoft 05
    (1, 1800000.00, '2024-01-15', 19, 6, 27), -- Promoção especial #Ferrari 61
    (5, 250000.00, '2024-01-05', 14, 8, 36), -- Desconto relâmpago #Booking.com 70

    -- Fevereiro 02
    (3, 318750.00, '2024-02-10', 3, 1, 9), -- Petrobras 06
    (2, 300000.00, '2024-02-18', 17, 4, 16), -- Black Friday #Itaú 07
    (1, 337500.00, '2024-02-22', 12, 4, 8), -- Verão #SpaceX 08
    (2, 75000.00, '2024-02-02', 14, 5, 6), -- Verão #Claro 09
    (2, 200000.00, '2024-02-28', 20, 2, 13), -- #Google 10
    (2, 320000.00, '2024-02-22', 13, 9, 28), -- Lançamento #Cisco 62

    -- Março 03
    (4, 480000.00, '2024-03-08', 2, 1, 10), -- BMW
    (3, 750000.00, '2024-03-15', 17, 3, 17), -- Lançamento #Accenture 11
    (2, 650000.00, '2024-03-21', 15, 2, 25), -- Nova coleção #Tesla 12
    (5, 500000.00, '2024-03-10', 21, 1, 4), -- Pacote promocional #Disney 13
    (1, 275000.00, '2024-03-29', 22, 3, 15), -- Desconto especial #Nissan 14
    (3, 550000.00, '2024-03-30', 14, 10, 29), -- Inovação tecnológica #Zoom 63

    -- Abril 04
    (1, 2250000.00, '2024-04-12', 7, 3, 4), -- Disney 15
    (2, 600000.00, '2024-04-25', 12, 6, 18), -- Pacote Premium #Nvidia 16
    (1, 160000.00, '2024-04-06', 5, 2, 7), -- Combo #Santander 17
    (4, 42000.00, '2024-04-06', 15, 5, 11), -- #Tivit 18
    (2, 900000.00, '2024-04-29', 13, 3, 12), -- Nova linha #Apple 19
    (4, 770000.00, '2024-04-18', 16, 5, 30), -- Edição limitada #Red Bull 64

    -- Maio 05
    (2, 1500000.00, '2024-05-24', 8, 3, 3), -- Black Friday #Meta 21
    (1, 240000.00, '2024-05-12', 6, 2, 3), -- Meta 22
    (1, 10000.00, '2024-05-30', 13, 5, 4), -- Disney 23
    (5, 1000000.00, '2024-05-15', 11, 1, 12), -- Apple 23
    (2, 600000.00, '2024-05-01', 10, 3, 13), -- #Google 25
    (1 ,750000.00,'2024-05-20',9, 3, 2), -- Ford 26 
    (2, 900000.00, '2024-05-01', 21, 6, 14), -- Microsoft 27
    (4, 125000.00, '2024-05-12', 19, 1, 19), -- super sale #Samsung 28
    (3, 950000.00, '2024-05-25', 15, 1, 24), -- festival de descontos #IBM 29
    (1, 1200000.00, '2024-05-30', 23, 8, 25), -- edição limitada #Tesla 30
    (5, 990000.00, '2024-05-25', 18, 7, 31), -- Finanças #PayPal 65
    
    -- Junho 06
    (4, 125000.00, '2024-06-10', 19, 1, 19), -- Super sale #Samsung 31
    (2, 250000.00, '2024-06-15', 11, 2, 26), -- Natal #Sony 32
    (2, 450000.00, '2024-06-01', 23, 6, 25), -- Edição limitada #Tesla 33
    (3, 550000.00, '2024-06-25', 12, 2, 17), -- Verão #Accenture 34
    (1, 2250000.00,'2024-06-07',7, 3, 4), -- verão 5 # Disney 35
    (1, 160000.00,'2024-06-15',5, 2, 7), -- combo 6 #Santander 36
    (2, 450000.00, '2024-06-10', 14, 2, 20), -- liquidação #Honda 37
    (1, 450000.00, '2024-06-10', 10, 9, 32), -- Nova versão #Adobe 66

    -- Julho 07
    (2, 300000.00, '2024-07-08', 14, 5, 21), -- Oferta especial #Netflix 38
    (1, 1000000.00, '2024-07-12', 15, 1, 22), -- Lançamento de verão #Amazon 39
    (1, 240000.00, '2024-07-15', 6, 2, 3), -- Meta 40
    (4, 48000.00, '2024-07-22', 22, 3, 14), -- Lançamento de coleções #Microsoft 41
    (3, 950000.00, '2024-07-28', 15, 1, 24), -- Festival de descontos #IBM 42
    (1, 10000.00, '2024-07-09', 13, 5, 4), -- Disney 43
    (2, 620000.00, '2024-07-12', 15, 10, 33), -- Lançamento especial #BMW Motorrad 67
    -- Agosto 08
    (2, 650000.00, '2024-08-14', 18, 3, 22), -- Combo #Amazon 44
    (1, 1200000.00, '2024-08-19', 12, 4, 18), -- Pacote Premium #Nvidia 45
    (4, 125000.00, '2024-08-10', 19, 2, 20), -- Liquidação #Honda 46
    (2, 500000.00, '2024-08-05', 10, 1, 23), -- Outono #Volkswagen 47
    (1, 50000.00, '2024-08-30', 22, 5, 10), -- Queima de estoque #BMW 48
    (2, 200000.00,'2024-08-01',4, 1, 5), -- combo 6 #Vivo 49
    (3, 820000.00, '2024-08-28', 11, 8, 34), -- Oferta de verão #Starbucks 68
    -- Setembro 09
    (3, 950000.00, '2024-09-15', 15, 1, 24), -- Festival de descontos #IBM 50
    (1, 1200000.00, '2024-09-12', 23, 6, 25), -- Edição limitada #Tesla 51
    (2, 250000.00, '2024-09-19', 11, 2, 26), -- Natal #Sony 52
    (1, 800000.00, '2024-09-19', 10, 4, 23), -- Outono #Volkswagen 53
    (5, 1000000.00, '2024-09-15', 11, 1, 12), -- Apple 54
    (2, 450000.00, '2024-09-10', 14, 3, 21), -- Promoção especial #Netflix 55
    (4, 1100000.00, '2024-09-15', 20, 7, 35), -- Edição de colecionador #Ducati 69
	-- Outubro
	(2, 200000.00, '2024-10-01', 5, 3, 14), -- Ano novo #Microsoft 05
    (1, 1800000.00, '2024-10-15', 19, 6, 27), -- Promoção especial #Ferrari 61
    (5, 250000.00, '2024-10-05', 14, 8, 36), -- Desconto relâmpago #Booking.com 70
	(2, 200000.00,'2024-10-01',4, 1, 5), -- combo 6 #Vivo 49
    -- Novembro 
	(2, 200000.00, '2024-11-28', 20, 2, 13), -- Google 10
    (2, 320000.00, '2024-11-22', 13, 9, 28), -- Lançamento #Cisco 62
	(1,150000.00,'2024-11-11',2, 1, 1), -- Mercedes 20
    (4, 770000.00, '2024-11-18', 16, 5, 30), -- Edição limitada #Red Bull 64
	(4, 125000.00, '2024-11-12', 19, 1, 19), -- super sale #Samsung 28
	-- Dezembro
	(1, 160000.00,'2024-12-15',5, 2, 7), #combo 6 #Santander 36
    (2, 450000.00, '2024-12-10', 14, 2, 20), -- liquidação #Honda 37
    (1, 450000.00, '2024-12-10', 10, 9, 32), -- Nova versão #Adobe 66
	(1, 10000.00, '2024-12-09', 13, 5, 4), -- Disney 43
    (2, 620000.00, '2024-12-12', 15, 10, 33), -- Lançamento especial #BMW Motorrad 67
	(2, 450000.00, '2024-12-10', 14, 3, 21); -- Promoção especial #Netflix 55
                                                                                    

INSERT INTO compra_promocao (fk_compra, fk_promocao) VALUES
    (3, 1),  -- Petrobras aproveitou o "Desconto Progressivo" (compra de 3 unidades em fevereiro)
    (7, 2),  -- Claro aproveitou a "Queima de Estoque" (compra de 7 unidades em janeiro)
    (5, 4),  -- Meta aproveitou a "Promoção de Ano Novo" (compra de 2 unidades em janeiro)
    (2, 4),  -- Petrobras fez uma compra especial no "Especial de Ano Novo" (compra de 1 unidade em janeiro)
    (9, 5),  -- SpaceX aproveitou a "Promoção de Verão" (compra de 1 unidade em fevereiro)
    (3, 6),  -- Petrobras comprou com o "Combo Servidor + Suporte" (compra de 3 unidades em fevereiro)
    (16, 7), -- Nissan aproveitou a "Semana do Consumidor" (compra de 1 unidade em janeiro)
    (11, 8), -- Tesla inaugurou um novo data center e aproveitou a promoção de inauguração (compra de 2 unidades em março)
    (4, 5),  -- BMW aproveitou a "Promoção de Verão" (compra de 4 unidades em março)
    (8, 5),  -- Claro fez uma compra durante a "Promoção de Verão" (compra de 2 unidades em fevereiro)
    (12, 9), -- Google aproveitou o "Desconto de Aniversário" (compra de 2 unidades em fevereiro)
    (13, 1), -- Accenture aproveitou o "Desconto Progressivo" para fazer uma compra em março
    (18, 1), -- Nvidia aproveitou o "Desconto Progressivo" para fazer uma grande compra em abril
    (20, 6), -- Amazon comprou um combo "Servidor + Suporte" em julho
    (21, 8), -- Amazon aproveitou a promoção de inauguração para expandir seu data center em agosto
    (24, 9), -- IBM aproveitou o "Desconto de Aniversário" em julho
    (26, 4), -- Tesla aproveitou a "Especial de Ano Novo" em junho
    (29, 6), -- Honda comprou com o "Combo Servidor + Suporte" em setembro
    (30, 10); -- Netflix aproveitou a "Semana da Tecnologia" para renovar sua infraestrutura em setembro




INSERT INTO contato (data_hora, motivo, fk_representante, fk_compra) VALUES ('2024-04-08 12:00:00', 'Solicitação de orçamento de um HPE Proliant DL380 Gen 11', 1, 1), #Mercedes
                                                                            ('2024-04-12 16:00:00', 'Confimação da compra de um HPE Proliant DL380 Gen 11', 1, 1), #Mercedes
                                                                            ('2024-05-10 09:00:00', 'Solicitação de orçamento de um HPE Alletra 5000', 2, 2), #Ford
                                                                            ('2024-05-20 15:00:00', 'Confimação da compra de um HPE Alletra 5000', 2, 2), #Ford
                                                                            ('2024-05-05 11:00:00', 'Solicitação de orçamento de dois HPE Alletra Storage 6000', 3, 6), #Meta
                                                                            ('2024-05-24 15:00:00', 'Confimação da compra de dois HPE Alletra Storage 6000', 3, 6), #Meta
                                                                            ('2024-05-24 15:00:00', 'Duvida sobre a implantação de dois HPE Alletra Storage 6000', 3, 6), #Meta
                                                                            ('2024-07-15 15:00:00', 'Solicitação de orçamento de um HPE Apollo 6500 Gen 10 Plus', 3, 8), #Meta
                                                                            ('2024-07-15 15:00:00', 'Confimação da compra de um HPE Apollo 6500 Gen 10 Plus', 3, 8), #Meta
                                                                            ('2024-07-15 15:00:00', 'Duvida sobre a implantação de um HPE Apollo 6500 Gen 10 Plus', 3, 8), #Meta
                                                                            ('2024-05-29 09:00:00', 'Solicitação de orçamento de um HPE Alletra 9000', 4, 4), #Disney
                                                                            ('2024-06-07 13:00:00', 'Confimação da compra de um HPE Alletra 9000', 4, 4), #Disney
                                                                            ('2024-06-20 11:00:00', 'Duvida sobre a implantação de um HPE Alletra 9000', 4, 4), #Disney
                                                                            ('2024-07-22 14:00:00', 'Solicitação de orçamento de dois HPE Proliant DL380 Gen 10', 5, 10), #Vivo
                                                                            ('2024-08-01 15:00:00', 'Confimação da compra de dois HPE Proliant DL380 Gen 10', 5, 10), #Vivo
                                                                            ('2024-08-09 09:00:00', 'Duvida sobre a implantação de dois HPE Proliant DL380 Gen 10', 5, 10), #Vivo
                                                                            ('2024-01-07 09:00:00', 'Solicitação de orçamento de sete HPE Proliant DL320 Gen 11', 6, 5), #Claro
                                                                            ('2024-01-14 09:00:00', 'Confimação da compra de sete HPE Proliant DL320 Gen 11', 6, 5), #Claro
                                                                            ('2024-01-21 09:00:00', 'Duvida sobre a implantação de sete HPE Proliant DL320 Gen 11', 6, 5), #Claro
                                                                            ('2024-06-10 13:00:00', 'Solicitação de orçamento de um HPE Apollo 2000 Gen 10 Plus', 7, 7), #Santander
                                                                            ('2024-06-15 12:00:00', 'Confimação da compra de um HPE Apollo 2000 Gen 10 Plus', 7, 7), #Santander
                                                                            ('2024-06-20 11:00:00', 'Duvida sobre a implantação de um HPE Apollo 2000 Gen 10 Plus', 7, 7), #Santander
                                                                            ('2024-06-25 10:00:00', 'Duvida sobre uma funcionalidade do um HPE Apollo 2000 Gen 10 Plus', 7, 7), #Santander
                                                                            ('2024-06-12 09:00:00', 'Conhecendo os produtos HPE', 8, 11), #Spacex
                                                                            ('2024-02-02 15:00:00', 'Solicitação de orçamento de um HPE Alletra Storage Server 4110', 8, 11), #Spacex
                                                                            ('2024-02-22 14:00:00', 'Confimação da compra de um HPE Alletra Storage Server 4110', 8, 11), #Spacex
                                                                            ('2024-03-05 11:00:00', 'Duvida sobre a implantação de um HPE Alletra Storage Server 4110', 8, 11), #Spacex
                                                                            ('2024-04-20 09:00:00', 'Duvida sobre uma funcionalidade do HPE Alletra Storage Server 4110', 8, 11), #Spacex
                                                                            ('2024-01-23 09:00:00', 'Solicitação de orçamento de tres HPE Proliant DL380 Gen 10', 9, 3), #Petrobras
                                                                            ('2024-02-10 14:00:00', 'Confimação da compra de tres HPE Proliant DL380 Gen 10', 9, 3), #Petrobras
                                                                            ('2024-03-17 11:00:00', 'Duvida sobre a implantação de tres HPE Proliant DL380 Gen 10', 9, 3), #Petrobras
                                                                            ('2024-05-06 10:00:00', 'Duvida sobre uma funcionalidade do HPE Proliant DL380 Gen 10', 9, 3), #Petrobras
                                                                            ('2024-06-05 12:00:00', 'Solicitação de orçamento de um HPE Alletra Storage Server 4140', 9, 12), #Petrobras
                                                                            ('2024-01-07 14:00:00', 'Confimação da compra de um HPE Alletra Storage Server 4140', 9, 12), #Petrobras
                                                                            ('2024-02-21 17:00:00', 'Duvida sobre a implantação de um HPE Alletra Storage Server 4140', 9, 12), #Petrobras
                                                                            ('2024-02-12 12:00:00', 'Solicitação de orçamento de um HPE Proliant DL380 Gen 11', 10, 9), #Bmw
                                                                            ('2024-03-08 16:00:00', 'Confimação da compra de um HPE Proliant DL380 Gen 11', 10, 9), #Bmw
                                                                            ('2024-03-09 11:00:00', 'Solicitação de orçamento de quatro HPE Networking Comware Switch Chassis 12916E Series 12900E', 11,13), #Tivit
                                                                            ('2024-04-06 15:00:00', 'Confimação da compra de quatro HPE Networking Comware Switch Chassis 12916E Series 12900E', 11, 13), #Tivit
                                                                            ('2024-06-02 11:00:00', 'Solicitação de orçamento de um Aruba 2930F 12G PoE+ 2G/2SFP+ Switch Series 2930F', 4, 14), #Disney
                                                                            ('2024-07-09 13:00:00', 'Confimação da compra de um Aruba 2930F 12G PoE+ 2G/2SFP+ Switch Series 2930F', 4, 14), #Disney
                                                                            ('2024-01-07 12:00:00', 'Solicitação de orçamento de dois Aruba 3800 24SFP 2SFP+ Switch Series 3800', 6, 15), #Claro
                                                                            ('2024-02-02 09:00:00', 'Confimação da compra de dois Aruba 3800 24SFP 2SFP+ Switch Series 3800', 6, 15), #Claro
                                                                            ('2024-09-10 10:00:00', 'Solicitação de orçamento de cinco HPE Alletra Storage Server 4110', 1, 16), -- Apple
                                                                            ('2024-09-15 15:00:00', 'Confirmação da compra de cinco HPE Alletra Storage Server 4110', 1, 16), -- Apple
                                                                            ('2024-05-25 11:00:00', 'Solicitação de orçamento de dois HPE Alletra 9000', 2, 17), -- Google
                                                                            ('2024-05-01 14:00:00', 'Confirmação da compra de dois HPE Alletra 9000', 2, 17),
                                                                            -- 1 INSERT
																			('2024-09-01 10:00:00', 'Solicitação de orçamento de servidores HPE Nimble Storage HF20', 14, 18), -- Microsoft
																			('2024-01-10 09:00:00', 'Solicitação de orçamento de servidores HPE Nimble Storage HF20', 15, 19), -- Nissan
																			('2024-01-20 15:00:00', 'Confirmação da compra de servidores HPE Nimble Storage HF20', 15, 19), -- Nissan
																			('2024-02-01 11:00:00', 'Solicitação de orçamento de um HPE Alletra 5000', 16, 20), -- Itaú
																			('2024-02-18 14:00:00', 'Confirmação da compra de um HPE Alletra 5000', 16, 20), -- Itaú
																			('2024-03-05 10:00:00', 'Solicitação de orçamento de um HPE Proliant DL380 Gen 11', 17, 21), -- Accenture
																			('2024-03-15 12:00:00', 'Confirmação da compra de um HPE Proliant DL380 Gen 11', 17, 21), -- Accenture
																			('2024-04-10 13:00:00', 'Solicitação de orçamento de um pacote premium de servidores HPE', 18, 22), -- Nvidia
																			('2024-04-25 16:00:00', 'Confirmação da compra de um pacote premium de servidores HPE', 18, 22), -- Nvidia
																			('2024-05-01 14:00:00', 'Solicitação de orçamento de um HPE Apollo 6500 Gen 10 Plus', 19, 23), -- Samsung
																			('2024-05-12 17:00:00', 'Confirmação da compra de um HPE Apollo 6500 Gen 10 Plus', 19, 23), -- Samsung
																			('2024-06-01 12:00:00', 'Solicitação de orçamento de servidores HPE Proliant DL380 Gen 10', 20, 24), -- Honda
																			('2024-06-10 15:00:00', 'Confirmação da compra de servidores HPE Proliant DL380 Gen 10', 20, 24), -- Honda
                                                                            ('2024-07-01 10:30:00', 'Solicitação de orçamento de um servidor HPE Nimble Storage AF20', 21, 25), -- Netflix
																			('2024-07-08 14:00:00', 'Confirmação da compra de um servidor HPE Nimble Storage AF20', 21, 25), -- Netflix
																			('2024-08-01 09:30:00', 'Solicitação de orçamento de um combo de servidores HPE', 22, 26), -- Amazon
																			('2024-08-14 16:00:00', 'Confirmação da compra de um combo de servidores HPE', 22, 26), -- Amazon
																			('2024-09-01 11:00:00', 'Solicitação de orçamento de servidores para data center HPE', 23, 27), -- Volkswagen
																			('2024-09-19 13:00:00', 'Confirmação da compra de servidores para data center HPE', 23, 27), -- Volkswagen
																			('2024-10-01 10:00:00', 'Solicitação de orçamento de servidores HPE para nuvem híbrida', 24, 28), -- IBM
																			('2024-05-25 15:30:00', 'Confirmação da compra de servidores HPE para nuvem híbrida', 24, 28), -- IBM
																			('2024-05-01 14:30:00', 'Solicitação de orçamento de servidores edição limitada HPE', 25, 29), -- Tesla
																			('2024-05-30 17:00:00', 'Confirmação da compra de servidores edição limitada HPE', 25, 29), -- Tesla
																			('2024-06-01 09:00:00', 'Solicitação de orçamento de servidores HPE Proliant ML350', 26, 30), -- Sony
																			('2024-06-15 16:00:00', 'Confirmação da compra de servidores HPE Proliant ML350', 26, 30); -- Sony





INSERT INTO vendedor_produto (fk_vendedor, fk_produto) VALUES (1,1),
                                                              (1,2),
                                                              (1,3),
                                                              (1,4),
                                                              (1,5),
                                                              (1,6),
                                                              (2,5),
                                                              (2,6),
                                                              (3,7),
                                                              (3,8),
                                                              (3,9),
                                                              (4,10),
                                                              (4,11),
                                                              (4,12),
                                                              (5,13),
                                                              (5,14),
                                                              (5,15),
                                                              (5,16),
                                                              (1, 11),
                                                              (1, 10),
                                                              (3, 12),
                                                              (3, 10),
                                                              -- 1 INSERT
                                                              (6, 21);


INSERT INTO vendedor_cliente (fk_vendedor, fk_cliente) VALUES
    (1, 1),
    (1, 9),
    (1, 6),
    (1, 10),
    (1, 4),
    (2, 7),
    (2, 3),
    (3, 2),
    (3, 4),
    (3, 3),
    (4, 9),
    (4, 8),
    (5, 4),
    (5, 6),
    (5, 11),
    (1, 12),
    (3, 13),
    (6, 14),
    (7, 15); 


INSERT INTO oportunidade (vendedor, produto, cliente, motivo, objetivo, plano_de_acao, cost, data_criacao) VALUES 
	('Matheus Pantaleao', 'HPE Proliant DL380', 'Meta', 'Foi observado que o cliente Meta está expandindo sua infraestrutura tecnológica e pode se beneficiar do servidor HPE Proliant DL380 para atender às suas necessidades em constante crescimento.', 'Aumentar as vendas do servidor HPE Proliant DL380 em 20% para o cliente Meta no próximo trimestre.', 'Engajamento do Cliente: Agendar reuniões quinzenais com a Meta para discutir suas necessidades atuais e futuras. Oferecer demonstrações personalizadas de como o servidor HPE Proliant DL380 pode atender às demandas específicas de sua infraestrutura em expansão. Promoção do Produto: Fornecer documentação detalhada e estudos de caso que demonstrem os benefícios e implantações bem-sucedidas do servidor HPE Proliant DL380. Organizar um webinar com um especialista técnico para explicar os recursos avançados e vantagens do servidor. Incentivos de Vendas: Oferecer um desconto por tempo limitado em compras em volume dos servidores para incentivar um maior volume de pedidos. Incluir contratos de serviço e manutenção estendidos como parte do pacote de compra sem custo adicional. Ciclo de Feedback: Implementar um sistema de feedback onde a Meta pode fornecer feedback em tempo real sobre sua experiência com o servidor. Utilizar esse feedback para refinar as ofertas de produtos e melhorar o atendimento ao cliente. Acompanhamento: Acompanhamento regular pós-venda para garantir a satisfação do cliente e resolver prontamente quaisquer problemas técnicos. Fornecer treinamento e suporte contínuos à Meta para maximizar a utilidade dos produtos adquiridos. Resultados Esperados: Relacionamento fortalecido com a Meta. Aumento no volume de vendas e satisfação do cliente. Aprimoramento das ofertas de produtos com base no feedback direto do cliente.', '2.40', '2024-09-03 11:16:02'),
	('Juliana Almeida', 'HPE SimpliVity 380', 'Disney ', 'O cliente Disney adquiriu múltiplos itens recentemente e pode otimizar sua infraestrutura com soluções hiperconvergentes.', 'Apresentar soluções que aumentem a eficiência operacional e simplifiquem a gestão da infraestrutura', 'Planejar um evento exclusivo para a equipe técnica da Disney, destacando as vantagens da hiperconvergência, demonstrar, em um ambiente controlado, como o HPE SimpliVity 380 pode reduzir custos com gerenciamento e aumentar a performance, criar uma proposta financeira que inclua descontos exclusivos por tempo limitado e oferecer treinamento técnico gratuito para a equipe da Disney após a compra.','1.30', '2024-10-14 15:38:02'),
    ('Fernanda Silva', 'HPE Alletra 9000', 'Santander ', 'O cliente Santander possui demandas críticas de baixa latência e alta disponibilidade em seus sistemas bancários.', 'Introduzir uma solução de armazenamento de missão crítica no ambiente do cliente', 'Realizar um workshop sobre armazenamento de classe empresarial com a equipe de TI do Santander, apresentar um estudo de ROI demonstrando a redução de custos operacionais e o aumento da eficiência, oferecer condições especiais na "Semana da Tecnologia" para facilitar a aquisição, disponibilizar consultoria gratuita para migração de dados.','1.87', '2024-09-16 10:38:02'),
    ('Lucas Pereira', 'HPE Apollo 6500', 'Meta', 'O cliente Meta está envolvido em projetos de IA e Big Data, que requerem alto desempenho de computação', 'Apresentar o HPE Apollo 6500 como a solução ideal para cargas de trabalho complexas.', 'Agendar uma reunião com os líderes de projeto da Meta para discutir requisitos de desempenho, apresentar benchmarks comparando o Apollo 6500 com soluções concorrentes, oferecer um programa de trade-in para equipamentos antigos e incluir uma demonstração prática do produto em simulações reais de IA da Meta','2.05', '2024-10-02 18:10:02'),
	('Marcos Antonio Campo Junior', 'HPE Alletra 5000', 'Claro', 'A Claro está buscando otimizar sua infraestrutura de armazenamento para suportar o aumento de dados de seus serviços.', 'Aumentar as vendas do HPE Alletra 5000 em 20% para a Claro nos próximos seis meses.', 'Engajamento do Cliente: Realizar visitas trimestrais ao data center da Claro. Promoção do Produto: Fornecer um workshop exclusivo para a equipe técnica da Claro sobre as funcionalidades do HPE Alletra 5000. Incentivos de Vendas: Incluir um pacote de suporte técnico gratuito por um ano em todas as compras. Acompanhamento: Oferecer treinamento contínuo e suporte técnico dedicado para maximizar o uso do HPE Alletra 5000.','1.43', '2024-09-19 09:45:02'),
	('Lucas Pereira', 'HPE Synergy 480', 'Microsoft', 'Microsoft busca flexibilidade e escalabilidade para atender a demandas dinâmicas em seus ambientes híbridos.', 'Fechar a venda de 4 unidades do HPE Synergy 480 para modernizar a infraestrutura de TI.', 'Visão de Negócio: Inicie a conversa com uma proposta sobre como o Synergy 480 pode acelerar a entrega de serviços na nuvem, Proposta Técnica: Realce a modularidade da solução e como ela se integra facilmente com cargas de trabalho existentes, Oferta de Parceria: Inclua treinamentos técnicos e suporte em nuvem durante os primeiros 12 meses para fomentar a confiança, Demonstração Customizada: Ofereça um workshop técnico mostrando o Synergy em operação em um cenário semelhante ao da Microsoft e Incentivo Final: Utilize a "Promoção de Verão" para oferecer condições atrativas com prazo limitado.','0.76', '2024-09-26 12:07:02'),
	('Abner Moreira Nunes', 'HPE SimpliVity 380', 'Vivo', 'A Vivo está procurando soluções hiperconvergentes para consolidar sua infraestrutura de TI.', 'Aumentar as vendas do HPE SimpliVity 380 para a Vivo em 25% no próximo semestre.', 'Engajamento do Cliente: Realizar reuniões mensais com os responsáveis de TI da Vivo. Promoção do Produto: Fornecer material detalhado e estudos de caso de outras empresas que utilizam o HPE SimpliVity 380. Incentivos de Vendas: Oferecer um desconto especial para o primeiro ano de contrato de suporte. Acompanhamento: Garantir suporte técnico contínuo e visitas técnicas semestrais para avaliar o desempenho da solução.','2.43', '2024-09-07 15:10:02'),
	('Victor Lage', 'Aruba 3800 24SFP 2SFP+ Switch', 'Petrobras', 'Petrobras já reportou dificuldades com a infraestrutura de rede durante a implantação de servidores.', 'Vender 5 switches Aruba 3800 para modernizar e expandir a conectividade da Petrobras.', 'Mapeamento Inicial: Ofereça uma análise gratuita da infraestrutura de rede atual da Petrobras, Apresentação Personalizada: Prepare uma proposta técnica explicando como os switches Aruba 3800 aumentam a resiliência e a eficiência energética, Benefício Adicional: Inclua um pacote de instalação e treinamento gratuito para a equipe técnica, Demonstração Prática: Proponha um piloto com um switch Aruba para comprovar os resultados e Negociação: Apresente descontos exclusivos e prazos de pagamento flexíveis via HPE Financial Services.',2.55,'2024-10-09 11:23:02'),
	('Marcos Antonio Campo Junior', 'HPE Proliant DL320', 'Ford', 'A Ford está modernizando sua infraestrutura de TI e necessita de servidores eficientes e escaláveis.', 'Aumentar as vendas do HPE Proliant DL320 para a Ford em 25% no próximo ano.', 'Engajamento do Cliente: Realizar reuniões trimestrais com a equipe de TI da Ford para discutir suas necessidades e apresentar soluções. Promoção do Produto: Organizar workshops técnicos e enviar newsletters com atualizações e benefícios do HPE Proliant DL320. Incentivos de Vendas: Oferecer pacotes de manutenção e suporte estendido como parte da compra. Acompanhamento: Fornecer suporte técnico contínuo e realizar visitas técnicas semestrais para garantir a eficiência dos servidores.',2.92, '2024-10-12 16:56:02'),
	('Abner Moreira Nunes', 'HPE Proliant DL380', 'Claro', 'Claro adquiriu vários servidores em janeiro, mas está expandindo sua infraestrutura, demandando mais escalabilidade e resiliência', 'Vender 3 novos servidores HPE Proliant DL380 para suportar a expansão e fidelizar o cliente.', 'Levante informações sobre os projetos em andamento da Claro e as necessidades atuais de TI, Agende uma reunião presencial ou virtual com o gerente de TI para apresentar a escalabilidade do DL380, Demonstre como o DL380 otimiza cargas de trabalho em nuvem e Big Data, citando casos de sucesso, Ofereça o "Desconto Progressivo" e inclua o primeiro ano de suporte técnico gratuito e Crie senso de urgência com a data limite da promoção de descontos',2.83, '2024-09-04 13:20:02'),
    -- 1 INSERT
    ('Juliana Almeida', 'HPE Synergy 660 Gen10', 'Microsoft', 'A Microsoft está expandindo sua infraestrutura em resposta à crescente demanda por serviços em nuvem.', 'Aumentar as vendas do HPE Synergy 660 Gen10 para a Microsoft em 30% no próximo ano.', 'Engajamento do Cliente: Agendar reuniões mensais com a Microsoft. Promoção do Produto: Fornecer estudos de caso e realizar workshops técnicos. Incentivos de Vendas: Oferecer contratos de manutenção com desconto. Acompanhamento: Fornecer suporte técnico contínuo e verificar o desempenho da solução.',0.59, '2024-09-26 14:12:02'),
	('Victor Lage', 'HPE StoreOnce 3640', 'Netflix', 'A Netflix possui demandas crescentes de backup e proteção de dados devido à sua vasta biblioteca de mídia global.', 'Vender 3 unidades do StoreOnce 3640 como solução para backup de alta eficiência', 'Chamada Inicial: Agende uma reunião com a equipe técnica da Netflix para entender os gargalos no armazenamento de backups, Proposta de Solução: Apresente o StoreOnce como uma solução que reduz drasticamente o uso de espaço em disco graças à deduplicação avançada, Simulação de Custos: Ofereça uma análise comparativa dos custos operacionais antes e depois da implementação do StoreOnce, Proponha um contrato de monitoramento remoto para garantir backups ininterruptos e seguros e Promoção Exclusiva: Combine o StoreOnce com licenciamento gratuito por um ano da integração em nuvem da HPE GreenLake.',1.29, '2024-09-14 11:27:02'),
    -- Novos Inserts
	('Fernanda Silva', 'HPE Apollo 6500', 'Nvidia', 'Nvidia está desenvolvendo novos projetos de IA que exigem alto desempenho computacional', 'Concluir a venda de 2 unidades do HPE Apollo 6500.', 'Workshop Exclusivo: Organize uma apresentação técnica destacando o uso do Apollo 6500 em cargas de trabalho de IA, Comparação Técnica: Prepare um comparativo técnico entre o Apollo 6500 e soluções concorrentes para destacar vantagens, Configuração Personalizada: Proponha uma solução sob medida com GPUs otimizadas para os projetos da Nvidia, Benefício Extra: Ofereça um desconto adicional para aquisição de contratos de suporte de 3 anos e Follow-Up Proativo: Acompanhe a Nvidia durante as fases iniciais de implementação para assegurar a satisfação e o fechamento da venda. ', 1.12,  '2024-10-05 16:45:00'),
	('Roberto Lima', 'HPE Nimble Storage HF20', 'Google', 'Google busca uma solução híbrida confiável para cargas de trabalho com desempenho moderado.', 'Realizar uma venda inicial de 3 unidades para uso em projetos híbridos', 'Entendimento da Necessidade: Realize uma chamada de descoberta para identificar as principais demandas do cliente, Demonstração Virtual: Ofereça uma demonstração interativa mostrando a facilidade de integração do Nimble HF20 com arquiteturas híbridas, Argumentação de Valor: Enfatize a deduplicação de dados e os ganhos de eficiência no armazenamento, Oferta de Teste: Inclua um período de teste gratuito de 30 dias para avaliação e Condição Especial: Proponha financiamento flexível e um pacote promocional com suporte inicial gratuito.', 0.94, '2024-10-27 11:20:00'),
	('Renata Souza', 'Aruba 3800 24SFP 2SFP+ Switch', 'BMW Motorrad', 'A BMW Motorrad está atualizando sua rede de dados e necessita de switches de alto desempenho.', 'Aumentar as vendas do Aruba 3800 para a BMW Motorrad em 20% no próximo semestre.', 'Engajamento do Cliente: Agendar reuniões trimestrais com a equipe de TI da BMW Motorrad. Promoção do Produto: Oferecer demonstrações técnicas. Incentivos de Vendas: Oferecer pacotes de suporte gratuito por um ano. Acompanhamento: Implementar um sistema de acompanhamento pós-venda para resolver rapidamente quaisquer problemas.', 1.45, '2024-09-20 13:00:00');

INSERT INTO feedback (fk_oportunidade, autor_tipo, fk_autor, rating_feedback, comentario_feedback, motivo_feedback, objetivo_feedback, estrategia_feedback, data_feedback) 
VALUES (1, 'gerente', 1, 4, 'Gostei dessa oportunidade mas achei que fez sentido o que a inteligência gerou', 'Fez sentido', 'Fez sentido', 'Fez sentido', '2024-09-28 00:26:39');


INSERT INTO cliente_contato (fk_cliente, fk_contato)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 6),
    (3, 7),
    (3, 8),
    (3, 9),
    (3, 10),
    (4, 11),
    (4, 12),
    (4, 13),
    (5, 14),
    (5, 15),
    (5, 16),
    (6, 17),
    (6, 18),
    (6, 19),
    (7, 20),
    (7, 21),
    (7, 22),
    (7, 23),
    (8, 24),
    (8, 25),
    (8, 26),
    (8, 27),
    (8, 28),
    (9, 29),
    (9, 30),
    (9, 31),
    (9, 32),
    (9, 33),
    (9, 34),
    (9, 35),
    (10, 36),
    (10, 37),
    (11, 38),
    (11, 39),
    (4, 40),
    (4, 41),
    (6, 42),
    (6, 43),
    (12, 44),
    (12, 45),
    (13, 46),
    (13, 47),
    -- 1 INSERT
    (14, 48); 

select * from oportunidade;		
select * from gerente;
select * from cliente;
select * from compra;
select * from vendedor;
select * from feedback;