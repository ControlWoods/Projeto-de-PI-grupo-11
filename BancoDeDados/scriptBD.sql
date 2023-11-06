create database controlWoods;
use controlWoods;


create table empresa(
idEmpresa int primary key auto_increment,
email varchar(30),
senha varchar(20),
cnpj char(14),
telefoneFixo char(11),
telefoneCelular char(12)
);

create table endereco(
idEndereco int primary key auto_increment,
estado varchar(15),
cep char(8),
logradouroo varchar(40),
numero varchar(4),
cidade varchar(30),
complemento varchar(30)
);

create table galpao(
idGalpao int primary key auto_increment,
nomeGalpao varchar(30),
tipoDeEucalipto varchar(45),
fkEmpresa int, 
foreign key (fkEmpresa) references empresa(idEmpresa),
fkEndereco int,
foreign key (fkEndereco) references endereco(idEndereco)
);

create table sensores(
idSensores int primary key auto_increment,
tipo varchar(20),
fkGalpao int,
constraint fkG foreign key(fkGalpao)
references galpao(idGalpao)
);


create table registros
(idRegistros int auto_increment,
umidade float,
horario datetime,
fkSensor int,
constraint fkS foreign key (fkSensor)
references sensores(idSensores),
primary key(idRegistros,fkSensor)
);





