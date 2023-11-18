function calcular() {
    var qtdTabuas = Number(input_tabuas.value);
    var custo = Number(input_custo.value);
    var porcentagem = Number(input_porcentagemPerda.value);
    
    if (porcentagem == 0) {
        porcentagem = 18;
    }
    var vendasAnuaisTotais = (qtdTabuas * custo)*12;
    var vendasAnuaisPerdas = (vendasAnuaisTotais / (1 - (porcentagem) / 100)) - vendasAnuaisTotais;
    var porcentagemControl = porcentagem - porcentagem / 2;
    var vendasAnuaisControl = vendasAnuaisTotais + vendasAnuaisPerdas / 2;

    mensagem_erro1.innerHTML = "";
    mensagem_erro2.innerHTML = "";
    var qtdTabuasValido = true;
    var custoValido = true;
    
    if(qtdTabuas <= 0) {
        mensagem_erro1.innerHTML = `*Campo inválido*`;
        qtdTabuasValido = false;
    } 
    if (custo <= 0) {
        mensagem_erro2.innerHTML = `*Campo inválido*`;
        custoValido = false;
    }

    var valido = qtdTabuasValido == true && custoValido == true;
    if (valido) {
        mensagemCalculadora.innerHTML=`<p>Atualmente sua empresa tem o lucro anual de R$<span style="color: #68e968;">${vendasAnuaisTotais.toFixed(2)}</span>.<br><br> Sua perda anual de <span style="color: red;">${porcentagem}%</span> representa R$<span style="color: red;">${vendasAnuaisPerdas.toFixed(2)}</span>, que infelizmente é sua realidade atual.<br><br> Com auxílio do nosso monitoramento a perda diminuiria para <span style="color: #68e968;">${porcentagemControl}%</span> e seu lucro aumentaria para R$<span style="color: #68e968;">${vendasAnuaisControl.toFixed(2)}</span>.</p>`;
    } else {
        mensagemCalculadora.innerHTML=`<img src="../img/Logo/logoWhitesmoke.png" alt="">`;
    }
}