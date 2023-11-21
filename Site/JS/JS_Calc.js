function calcular() {

    // inputs do usuario
    var qtdTabuas = Number(input_tabuas.value);
    var custoTabuas = Number(input_custo.value);
    var perdaPorcentagem = ((Number(input_porcentagemPerda.value) * 1) / qtdTabuas);

    // valor bruto em reais (sem a perda d tabuas)
    var vendasTotais = (qtdTabuas * custoTabuas);
    // valor liquido (lucro anual)
    var perdasTotais = vendasTotais * (1 - perdaPorcentagem);
    // valor das perdas
    var valorPerdas = (vendasTotais * perdaPorcentagem);
    // beneficio da woods (50% do porcentagem de perda da empresa)
    var porcentagemControl = perdaPorcentagem / 2;
    // adicionando nossa porcentagem sob do valor liquido 
    var vendasControl = (perdasTotais * porcentagemControl) + perdasTotais;

    // condição acaso campo 3 esteja nulo (será aplicado 18%)
    if (perdaPorcentagem == 0) {
        perdaPorcentagem = 18 / 100;
    }

    // limpando as div de erro
    mensagem_erro1.innerHTML = "";
    mensagem_erro2.innerHTML = "";

    // variavel da div erro
    var qtdTabuasValido = true;
    var custoValido = true;
    // condições para div erro
    if (qtdTabuas <= 0) {
        mensagem_erro1.innerHTML = `*Campo inválido*`;
        qtdTabuasValido = false;
    }
    if (custoTabuas <= 0) {
        mensagem_erro2.innerHTML = `*Campo inválido*`;
        custoValido = false;
    }
    // validação para resposta 
    var valido = qtdTabuasValido == true && custoValido == true;
    // mensagem 
    if (valido) {

        mensagemCalculadora.innerHTML = `<p>Atualmente sua empresa tem o lucro anual de R$ <span style="color: #68e968;">${perdasTotais.toLocaleString()}</span>.<br><br> 

        Sua perda anual de <span style="color: red;">${perdaPorcentagem*100}%</span> representa R$ <span style="color: red;">${valorPerdas.toLocaleString()}</span>, que infelizmente é sua realidade atual.<br><br> 
        
        Com auxílio do nosso monitoramento a perda diminuiria para <span style="color: #68e968;">${porcentagemControl*100}%</span> e seu lucro aumentaria para R$ <span style="color: #68e968;">${vendasControl.toLocaleString()}</span>.</p>`;

    } else {
        mensagemCalculadora.innerHTML = `<img src="../img/Logo/logoWhitesmoke.png" alt="">`;
    }
}