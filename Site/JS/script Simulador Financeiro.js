function calcular () {
    var qtdPaletesMes = Number(input_qtdPaletesMes.value);
    var qtdTabuas = Number(input_qtdTabuas.value);
    var preco = Number(input_preco.value);
    var perda = Number(input_perda.value);
    var validacao = qtdPaletesMes > 0 && qtdTabuas > 0 && preco > 0 && perda > 0;
    var lucroAnual = ((qtdPaletesMes * qtdTabuas) * preco) * 12;
    var perdaAnual = (lucroAnual / (1 - (perda) / 100)) - lucroAnual;
    if (validacao == true) {
        div_calculo.innerHTML = `Com a venda de ${qtdPaletesMes} paletes por mês, com uma média de ${qtdTabuas} tábuas, se tem o lucro anual líquido de R$${lucroAnual}. A perda anul de ${perda} representa R$${perdaAnual.toFixed(2)}`;
    } else {
        alert("Valores negativos não são aceitos.")
    }
}