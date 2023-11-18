function calcular() {
    var qtdTabuas = Number(input_tabuas.value);
    var custo = Number(input_custo.value);
    var porcentagem = Number(input_porcentagemPerda.value);
    var vendasAnuaisTotais = (qtdTabuas * custo)*12;
    var vendasAnuaisPerdas = (vendasAnuaisTotais / (1 - (porcentagem) / 100)) - vendasAnuaisTotais;
    var porcentagemControl = porcentagem - porcentagem / 2;
    var vendasAnuaisControl = vendasAnuaisTotais + vendasAnuaisPerdas / 2;

    if (porcentagem == 0) {
        porcentagem = 18;
    }

    if(qtdTabuas <= 0 && custo <= 0) {
        alert("Quantidade e Valor por tabua deve ser maior que 0")
    } else {
        mensagemCalculadora.innerHTML=`<p>Atualmente sua empresa tem o lucro anual de R$<span style="color: #68e968;">${vendasAnuaisTotais.toFixed(2)}</span>.<br><br> Sua perda anual de <span style="color: red;">${porcentagem}%</span> representa R$<span style="color: red;">${vendasAnuaisPerdas.toFixed(2)}</span>, que infelizmente é sua realidade atual.<br><br> Com auxílio do nosso monitoramento a perda diminuiria para <span style="color: #68e968;">${porcentagemControl}%</span> e seu lucro aumentaria para R$<span style="color: #68e968;">${vendasAnuaisControl.toFixed(2)}</span>.</p>`;
    }
}