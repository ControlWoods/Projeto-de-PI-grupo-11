var graficoModel = require("../models/graficoModel");

// function dadosGraficos(req, res) {
//     const email = req.body.email;
//     const senha = req.body.senha;

//     graficoModel.dadosGraficos(email, senha)
//         .then(function (resultado) {
//             console.log(`\nResultados encontrados: ${resultado.length}`);
//             console.log(`Resultados: ${JSON.stringify(resultado)}`);

//             if (resultado.length > 0) {
//                 console.log("buralaburala" + resultado[0].umidadeReal)
//                 res.json({
//                     umidadeReal: resultado[0].umidadeReal,
//                     horaUmidade: resultado[0].horaUmidade
//                     // P2_medo: resultado[0].P2_medo,
//                     // P2_muitoMedo: resultado[0].P2_muitoMedo
//                 });
//             } else {
//                 res.status(403).send("Nenhum resultado encontrado.");
//             }
//         })
//         .catch(function (erro) {
//             console.log(erro);
//             res.status(500).json({ error: "Erro interno no servidor" });
//         });
// }

function dadosGraficos(req, res) {
    graficoModel.dadosGraficos()
        .then(function (resultado) {
            res.json({
                umidadeReal: resultado[0].umidadeReal,
                horaUmidade: resultado[0].horaUmidade
            });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ error: "Erro interno no servidor" });
        });
}


module.exports = {
    dadosGraficos
};
