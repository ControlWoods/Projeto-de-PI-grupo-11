create database controlWoods;
use controlWoods;

create table empresa(
idEmpresa int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null,
cnpj char(14) not null,
telFixo char(10),
telCelular char(11)
);

create table galpao (
idGalpao int primary key auto_increment,
nome varchar(45),
fkEmpresa int not null, 
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table sensores(
idSensor int primary key auto_increment,
fkGalpao int,
fkEmpresa int,
constraint fkG foreign key(fkGalpao) references galpao(idGalpao),
constraint fkE foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table registros (
idRegistro int auto_increment,
umidade float not null,
dtHorario datetime not null,
fkSensor int,
constraint fkS foreign key (fkSensor) references sensores(idSensor),
primary key(idRegistro, fkSensor)
);

select * from empresa;
insert into empresa values 
(null, 'teste', "teste", "oooii",1223333,070079797,80808808);

select * from galpao;

insert into galpao values 
(null, 'galp1', 1);

select * from sensores;

insert into sensores values
(null, 1, 1);

select * from registros;
insert into registros values
(null, 32.0, "2020-04-12 12:00:00", 1);

select * from empresa join galpao on idEmpresa=fkEmpresa
join sensores on fkGalpao=idGalpao join registros on idRegistro = fkSensor;

select registros.umidade, registros.dtHorario from registros join sensores on fkSensor = idSensor where fkGalpao = 1;