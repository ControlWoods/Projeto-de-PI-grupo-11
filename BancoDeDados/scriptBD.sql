create database controlWoods;
use controlWoods;


create table empresa(
idEmpresa int primary key auto_increment,
email varchar(30) not null,
senha varchar(20) not null,
cnpj char(14) not null,
telefoneFixo char(11),
telefoneCelular char(12)
);

create table endereco(
idEndereco int primary key auto_increment,
estado varchar(15) not null,
cep char(8) not null,
logradouro varchar(40) not null,
numero varchar(4),
cidade varchar(30) not null,
complemento varchar(30)
);

create table galpao(
idGalpao int primary key auto_increment,
nomeGalpao varchar(30),
tipoDeEucalipto varchar(45) not null,
fkEmpresa int not null, 
foreign key (fkEmpresa) references empresa(idEmpresa),
fkEndereco int not null,
foreign key (fkEndereco) references endereco(idEndereco)
);

create table sensores(
idSensores int primary key auto_increment,
tipo varchar(20) not null,
fkGalpao int not null,
constraint fkG foreign key(fkGalpao)
references galpao(idGalpao)
);


create table registros
(idRegistros int auto_increment,
umidade float not null,
horario datetime not null,
fkSensor int,
constraint fkS foreign key (fkSensor)
references sensores(idSensores),
primary key(idRegistros,fkSensor)
);