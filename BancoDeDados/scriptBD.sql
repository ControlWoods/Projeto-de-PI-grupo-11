create database controlWoods;
use controlWoods;


create table empresa(
idEmpresa int primary key auto_increment,
email varchar(30),
senha varchar(20),
cnpj char(14),
telefone char(11)
);

create table endereco(
idEndereco int primary key auto_increment,
estado varchar(15),
cep char(8),
endereco varchar(40),
numero varchar(4),
cidade varchar(30),
complemento varchar(30),
fkEmpresa int,
constraint fkE foreign key (fkEmpresa)
references empresa(idEmpresa)
);

create table galpao(
idGalpao int primary key auto_increment,
nomeGalpao varchar(30),
fkEmpresa int, 
constraint fkEmp foreign key (fkEmpresa)
references empresa(idEmpresa));

create table sensores(
idSensores int primary key auto_increment,
tipo varchar(20),
fkGalpao int,
constraint fkG foreign key(fkGalpao)
references galpao(idGalpao)
);
insert into sensores values
(1, 'Umidade', null);

select * from sensores;

create table registros
(idRegistros int auto_increment,
umidade float,
horario datetime,
fkSensor int,
constraint fkS foreign key (fkSensor)
references sensores(idSensores),
primary key(idRegistros,fkSensor)
);

select * from registros;

select * from endereco as e join empresa as emp on e.fkEmpresa= emp.idEmpresa 
join galpao as g on emp.idEmpresa = g.fkEmpresa 
join sensores as s on s.fkGalpao=g.idGalpao join registros as r on r.fkSensor=s.idSensores;




