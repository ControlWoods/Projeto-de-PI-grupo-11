function calcular() {
    var qtdTabuas=Number(input_tabuas.value);
    var custo= Number(input_custo.value);
    var porcentagem= Number(input_porcentagemPerda.value);
    var vendasAnuaisTotais= (qtdTabuas * custo)*12;
    var vendasAnuaisPerdas= vendasAnuaisTotais*(porcentagem/100);
    var porcentagemControl= porcentagem-porcentagem/4;
    var vendasAnuaisControl= vendasAnuaisTotais- vendasAnuaisTotais*(porcentagemControl/100)

    mensagemCalculadora.innerHTML=`<p>No cenário onde fossem vendidas todas as suas <span style="color: #68e968;">${qtdTabuas}</span> tábuas por mês, sua empresa teria um lucro anual de R$ <span style="color: #68e968;">${vendasAnuaisTotais}</span>.<br><br> Sua perda anual de <span style="color: red;">${porcentagem}%</span> representa R$ <span style="color: red;">${vendasAnuaisPerdas}</span>, que infelizmente é sua realidade atual.<br><br> Com auxílio do nosso monitoramento a perda diminuiria para <span style="color: #68e968;">${porcentagemControl}%</span> e seu lucro seria de R$ <span style="color: #68e968;">${vendasAnuaisControl}</span>.</p>`;
}


// function calcular () {
//     var qtdPaletesMes = Number(input_qtdPaletesMes.value);
//     var qtdTabuas = Number(input_qtdTabuas.value);
//     var preco = Number(input_preco.value);
//     var perda = Number(input_perda.value);
//     var validacao = qtdPaletesMes > 0 && qtdTabuas > 0 && preco > 0 && perda > 0;
//     var lucroAnual = ((qtdPaletesMes * qtdTabuas) * preco) * 12;
//     var perdaAnual = (lucroAnual / (1 - (perda) / 100)) - lucroAnual;
//     if (validacao == true) {
//         div_calculo.innerHTML = `Com a venda de ${qtdPaletesMes} paletes por mês, com uma média de ${qtdTabuas} tábuas, se tem o lucro anual líquido de R$${lucroAnual}. A perda anul de ${perda} representa R$${perdaAnual.toFixed(2)}`;
//     } else {
//         alert("Valores negativos não são aceitos.")
//     }
// }