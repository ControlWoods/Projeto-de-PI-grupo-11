drop database controlWoods;
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
dtHorario datetime default current_timestamp,
fkSensor int,
constraint fkS foreign key (fkSensor) references sensores(idSensor),
primary key(idRegistro, fkSensor)
);

-- select * from empresa;
-- select * from galpao;
-- select * from sensores;
-- select * from registros;

insert into empresa values 
(null, 'Contro Woods', "controlwoods@gmail.com", "Cw123456", 12345678912345, 1234567891, 11942290258);

insert into galpao values 
(null, 'Galpão 1', 1);

insert into sensores values
(null, 1, 1);

insert into registros values
(null, 48.0, "2023-12-12 01:00:00", 1),
(null, 49.0, "2020-12-12 02:00:00", 1),
(null, 49.0, "2020-12-12 03:00:00", 1),
(null, 50.0, "2020-12-12 04:00:00", 1),
(null, 50.0, "2020-12-12 05:00:00", 1),
(null, 50.0, "2020-12-12 06:00:00", 1),
(null, 49.0, "2020-12-12 07:00:00", 1),
(null, 51.0, "2020-12-12 08:00:00", 1),
(null, 55.0, "2020-12-12 09:00:00", 1);

-- select * from empresa join galpao on idEmpresa=fkEmpresa join sensores on fkGalpao=idGalpao join registros on idRegistro = fkSensor;
-- select registros.umidade, registros.dtHorario from registros join sensores on fkSensor = idSensor where fkGalpao = 1;