-- pratica 09

CREATE DATABASE pratica09;
USE pratica09;

CREATE TABLE grupo(
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(150)
);
    
CREATE TABLE aluno(
	ra CHAR(8) PRIMARY KEY,
    nome VARCHAR(45),
    email VARCHAR(45),
    fkGrupo int,
    FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo)
);

CREATE TABLE professor(
	idProfessor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    disciplina VARCHAR(45)
)auto_increment=10000;
    
-- tabela do n para n

CREATE TABLE avaliacao(
	idAvaliacao INT AUTO_INCREMENT,
	fkGrupo INT,
    FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
    fkProfessor INT,
    FOREIGN KEY (fkProfessor) REFERENCES professor(idProfessor),
    dtHora DATETIME,
    nota FLOAT,
    PRIMARY KEY (idAvaliacao, fkGrupo, fkProfessor)
);
    
SELECT * FROM grupo;

INSERT INTO grupo(nome, descricao) VALUES 
	('Grupo11','Monitoramento de umidade em galpões de madeira'),
    ('Grupo3','Monitoramento de temperatura e umidade em museus'),
    ('Grupo10','Monitoramente de umidade e temperatura em datacenters' ),
    ('Grupo4','Monitoramento de temperatura e umidade em estufas de cogumelo');

SELECT * FROM aluno;

INSERT INTO aluno VALUES 
	('01232001', 'Paulo Lima', 'paulo.lima@sptech.school', 1),
	('01232050', 'Roberta Miranda', 'roberta.miranda@sptech.school', 2),
	('01232073', 'Bruna Araujo', 'bruna.araujo@sptech.school', 3),
	('01232181','Ana Marques', 'ana.marques@sptech.school', 4),
	('01232149','Matheus Rabello', 'matheus.rabello@sptech.school', 1),
	('01232002','Amanda Martins', 'amanda.martins@sptech.school', 2),
	('01232022','Vinicius Silvestre', 'vinicius.silvestre@sptech.school', 3),
	('01232102','Gabriela Severino', 'gabriela.severino@sptech.school', 4);

SELECT * FROM professor;

INSERT INTO professor(nome, disciplina) VALUES 
	('Rafael Petry', 'TI'),
    ('João Pedro', 'Algoritimos'),
	('Marise Miranda', 'ArqComp'),
    ('Vivian Silva', 'Banco de dados'),
	('Claudio Frizzarini','Pesquisa e inovação');

SELECT * FROM avaliacao;
SELECT * FROM grupo;
SELECT * FROM professor;

INSERT INTO avaliacao VALUES 
	(null, 1, 10000,'2023-10-27 09:30', 10.0),
    (null, 1, 10001,'2023-10-27 09:30', 9.5),
    (null, 1, 10004,'2023-10-27 09:30', 9.5),
    (null, 2, 10000,'2023-10-27 10:00', 8.0),
    (null, 2, 10001,'2023-10-27 10:00', 9.5),
	(null, 2, 10002,'2023-10-27 10:00', 10.0),
    (null, 3, 10000,'2023-10-27 10:30', 5.0),
    (null, 3, 10001,'2023-10-27 10:30', 6.0),
    (null, 3, 10003,'2023-10-27 10:30', 7.5),
    (null, 4, 10003,'2023-10-27 11:00', 7.0),
    (null, 4, 10001,'2023-10-27 11:00', 8.0),
	(null, 4, 10002,'2023-10-27 11:00', 7.5);
    
-- Exibir todos os dados de cada tabela criada, separadamente
SELECT * FROM grupo;
SELECT * FROM aluno;
SELECT * FROM professor;
SELECT * FROM avaliacao;

-- Exibir os dados dos grupos e os dados de seus respectivos alunos
SELECT g.nome AS "Nome do Grupo", g.descricao AS 'Descrição',
a.nome AS 'Nome do Aluno', a.ra AS RA, a.email AS Email 
FROM grupo AS g INNER JOIN aluno AS a ON idGrupo=fkGrupo;
                    
--  Exibir os dados de um determinado grupo e os dados de seus respectivos alunos
SELECT g.nome AS "Nome do Grupo", g.descricao AS 'Descrição', a.nome AS 'Nome do Aluno',
a.ra AS RA, a.email AS Email FROM grupo AS g INNER JOIN aluno AS a ON idGrupo=fkGrupo WHERE idGrupo=1;
    
-- Exibir a média das notas atribuídas aos grupos, no geral
SELECT TRUNCATE (AVG(nota),2) AS 'Nota média dos grupos' FROM avaliacao;

-- Exibir a nota mínima e a nota máxima que foi atribuída aos grupos, no geral
SELECT MIN(nota) AS "Nota mínima" FROM avaliacao;
SELECT MAX(nota) AS "Nota máxima" FROM avaliacao;
SELECT MIN(nota) AS "Nota mínima",  MAX(nota) AS "Nota máxima" FROM avaliacao;
    
-- Exibir a soma das notas dadas aos grupos, no geral
SELECT SUM(nota) AS "Soma de notas" FROM avaliacao;
    
-- Exibir os dados dos professores que avaliaram cada grupo, os dados dos grupos, a data e o horário da avaliação.
SELECT g.*, p.nome AS Professor, p.disciplina AS Disciplina, a.dtHora AS "Data e Hora",
a.nota AS Nota FROM avaliacao AS a INNER JOIN professor AS p ON fkprofessor=idprofessor
INNER JOIN grupo AS g ON fkGrupo=idGrupo;

-- Exibir os nomes dos grupos que foram avaliados por um determinado professor	
SELECT g.*, p.nome AS Professor, p.disciplina AS Disciplina, a.dtHora AS "Data e Hora",
a.nota AS Nota FROM avaliacao AS a INNER JOIN professor AS p ON fkprofessor=idprofessor
INNER JOIN grupo AS g ON fkGrupo=idGrupo WHERE p.nome LIKE "Vivian%";
                            
-- Exibir os dados dos grupos, os dados dos alunos correspondentes, os dados dos professores que avaliaram, a data e o horário da avaliação
SELECT g.nome AS 'Nome do grupo', g.descricao AS 'Descrição do projeto',
al.ra AS RA, al.nome AS 'Nome do aluno', al.email AS Email,
p.idprofessor, p.nome AS 'Nome do Professor', p.disciplina,
a.dtHora AS 'Agenda da apresentação'
FROM grupo AS g INNER JOIN aluno AS al ON al.fkGrupo=idGrupo
INNER JOIN avaliacao AS a ON a.fkGrupo=idGrupo
INNER JOIN professor AS p ON fkprofessor=idprofessor;

-- Exibir a quantidade de notas distintas
SELECT COUNT(DISTINCT(nota)) AS 'Notas distintas' FROM avaliacao;
SELECT DISTINCT(nota) AS 'Notas distintas' FROM avaliacao;
    
-- Exibir a identificação do professor (pode ser o fk ou o nome), a média das notas e a soma das notas atribuídas, agrupadas por professor
SELECT p.nome AS 'Nome do professor',  TRUNCATE(AVG(a.nota),2) AS 'Média de notas',
SUM(a.nota) AS 'Soma das notas'
FROM avaliacao AS a INNER JOIN professor AS p ON idprofessor=fkprofessor GROUP BY nome;
  
			
-- Exibir a identificação do grupo (pode ser o fk ou o nome), a média das notas e a soma das notas atribuídas, agrupadas por grupo
SELECT g.nome AS 'Nome do grupo', TRUNCATE(AVG(a.nota),2) AS 'Nota média',
SUM(a.nota) AS 'Soma das notas'
FROM avaliacao AS a INNER JOIN grupo AS g ON fkgrupo=idgrupo GROUP BY nome;
	
-- Exibir a identificação do professor (pode ser o fk ou o nome), a menor nota e a maior nota atribuída, agrupada por professor
SELECT p.nome AS 'Nome do Professor',
Max(a.nota) AS 'Nota máxima',
Min(a.nota) AS 'Nota mínima'
FROM avaliacao AS a INNER JOIN professor AS p ON idprofessor=fkprofessor GROUP BY idProfessor;

-- Exibir a identificação do grupo (pode ser o fk ou o nome), a menor nota e a maior nota atribuída, agrupada por grupo
SELECT g.nome AS 'Nome do Grupo',
Max(a.nota) AS 'Maior nota',
Min(a.nota) AS 'Menor nota' 
FROM avaliacao AS a INNER JOIN grupo AS g ON idGrupo=fkGrupo GROUP BY idGrupo;