var database = require("../database/config");

// function dadosGraficos(email, senha) {
//     const instrucao = `
//     select umidade as umidadeReal, DATE_FORMAT (dtHorario,'%H:%i:%s') as horaUmidade from registros
//                 where fkSensor = 1
//                 order by idRegistro desc limit 3;
//     `;

//     console.log("Executando a instrução SQL:\n", instrucao);
//     return database.executar(instrucao);
// }

function dadosGraficos() {
    const instrucao = `
        SELECT umidade as umidadeReal, DATE_FORMAT(dtHorario, '%H:%i:%s') as horaUmidade
        FROM registros
        WHERE fkSensor = 1
        ORDER BY idRegistro DESC limit 1;
    `;

    console.log("Executando a instrução SQL:\n", instrucao);
    return database.executar(instrucao);
}



module.exports = {
    dadosGraficos
};