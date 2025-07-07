DROP DATABASE  againdb;
CREATE DATABASE againdb;
USE againdb;

CREATE TABLE gerente (
                         id_gerente INT PRIMARY KEY AUTO_INCREMENT,
                         nome VARCHAR(100),
                         email VARCHAR(100) UNIQUE,
                         senha VARCHAR(100)
);

CREATE TABLE produto (
                         id_produto INT AUTO_INCREMENT PRIMARY KEY,
                         nome VARCHAR(100),
                         preco DECIMAL(9,2),
                         descricao VARCHAR(9999),
                         categoria VARCHAR(30),
                         geracao VARCHAR(30)
);

CREATE TABLE promocao (
                          id_promocao INT AUTO_INCREMENT PRIMARY KEY,
                          titulo VARCHAR(100),
                          descricao VARCHAR(9999),
                          utilizacao VARCHAR(355),
                          desconto INT,
                          validade DATETIME
);

CREATE TABLE vendedor (
                          id_vendedor INT PRIMARY KEY AUTO_INCREMENT,
                          nome VARCHAR(100),
                          email VARCHAR(100) UNIQUE,
                          senha VARCHAR(100),
                          aprovado boolean,
                          fk_gerente INT,
                          FOREIGN KEY (fk_gerente) REFERENCES gerente(id_gerente)
);

CREATE TABLE representante (
                               id_representante INT AUTO_INCREMENT PRIMARY KEY,
                               nome VARCHAR(100),
                               telefone CHAR(14),
                               email VARCHAR(100)
);

CREATE TABLE cliente (
                         id_cliente INT AUTO_INCREMENT PRIMARY KEY,
                         nome VARCHAR(100),
                         cnpj CHAR(14),
                         embarque DATE,
                         area VARCHAR(50),
                         fk_representante INT,
                         FOREIGN KEY (fk_representante) REFERENCES representante(id_representante)
);

CREATE TABLE compra (
                        id_compra INT AUTO_INCREMENT PRIMARY KEY,
                        quantidade INT,
                        valor DECIMAL(9,2),
                        data_compra DATE,
                        fk_produto INT,
                        fk_vendedor INT,
                        fk_cliente INT,
                        FOREIGN KEY (fk_produto) REFERENCES produto(id_produto),
                        FOREIGN KEY (fk_vendedor) REFERENCES vendedor(id_vendedor),
                        FOREIGN KEY (fk_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE compra_promocao (
                                 id_compra_promocao INT AUTO_INCREMENT PRIMARY KEY,
                                 fk_compra INT,
                                 fk_promocao INT,
                                 FOREIGN KEY (fk_compra) REFERENCES compra(id_compra),
                                 FOREIGN KEY (fk_promocao) REFERENCES promocao(id_promocao)
);

CREATE TABLE contato (
                         id_contato INT AUTO_INCREMENT PRIMARY KEY,
                         data_hora DATETIME,
                         motivo VARCHAR(355),
                         fk_representante INT,
                         fk_compra INT,
                         FOREIGN KEY (fk_representante) REFERENCES representante(id_representante),
                         FOREIGN KEY (fk_compra) REFERENCES compra(id_compra)
);

CREATE TABLE cliente_contato (
                                 id_cliente_contato INT AUTO_INCREMENT PRIMARY KEY,
                                 fk_cliente INT,
                                 fk_contato INT,
                                 FOREIGN KEY (fk_cliente) REFERENCES cliente(id_cliente),
                                 FOREIGN KEY (fk_contato) REFERENCES contato(id_contato)
);

CREATE TABLE vendedor_produto (
                                  id_vendedor_produto INT AUTO_INCREMENT PRIMARY KEY,
                                  fk_vendedor INT,
                                  fk_produto INT,
                                  FOREIGN KEY (fk_vendedor) REFERENCES vendedor(id_vendedor),
                                  FOREIGN KEY (fk_produto) REFERENCES produto(id_produto)
);

CREATE TABLE vendedor_cliente (
                                  id_vendedor_cliente INT AUTO_INCREMENT PRIMARY KEY,
                                  fk_vendedor INT,
                                  fk_cliente INT,
                                  FOREIGN KEY (fk_vendedor) REFERENCES vendedor(id_vendedor),
                                  FOREIGN KEY (fk_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE oportunidade (
                              id_oportunidade INT AUTO_INCREMENT PRIMARY KEY,
                              vendedor VARCHAR(30),
                              produto VARCHAR(50),
                              cliente VARCHAR(50),
                              motivo VARCHAR(1000),
                              objetivo VARCHAR(355),
                              plano_de_acao VARCHAR(2000),
                              cost DOUBLE(4,2) NULL,
                              data_criacao TIMESTAMP NULL
);

CREATE TABLE feedback (
    id_feedback INT PRIMARY KEY AUTO_INCREMENT,
    fk_oportunidade INT, 
    autor_tipo ENUM('vendedor', 'gerente'),
    fk_autor INT, 
    rating_feedback INT NULL, 
    comentario_feedback TEXT,
    motivo_feedback VARCHAR(20),
    objetivo_feedback VARCHAR(20),
    estrategia_feedback VARCHAR(20),
    data_feedback TIMESTAMP NULL,
    FOREIGN KEY (fk_oportunidade) REFERENCES oportunidade(id_oportunidade),
    CONSTRAINT fk_autor_vendedor FOREIGN KEY (fk_autor) REFERENCES vendedor(id_vendedor) ON DELETE CASCADE,
    CONSTRAINT fk_autor_gerente FOREIGN KEY (fk_autor) REFERENCES gerente(id_gerente) ON DELETE CASCADE
);

select * from feedback;