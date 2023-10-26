function calcular () {
    var qtdPaletes = Number(input_qtdPaletes.value);
    var qtdTabuas = Number(input_qtdTabuas.value);
    var preco = Number(input_preco.value);
    var perda = Number(input_perda.value);
    var validacao = qtdPaletes < 0 && qtdTabuas < 0 && preco < 0 && perda < 0;
    var lucroAnual = (qtdPaletes * qtdTabuas) * preco;
    var perdaAnual = perda * (perda / 100);
    if (validacao == true) {
        div_calculo.innerHTML = `Com a venda de ${qtdPaletes} paletes, com ${qtdTabuas} tábuas, se tem o lucro anual líquido de R$${lucroAnual}. A perda anul de ${perda} representa R$${perdaAnual}`;
    } else {
        alert("Valores negativos não são aceitos.")
    }
    div_calculo
}