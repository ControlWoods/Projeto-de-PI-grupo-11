function cadastrar(){
    var empresa = nome_empresa.value;
    var email = email_empresa.value;
    var confirmacaoE = confirmacao_email.value;
    var senha = senha_empresa.value;
    var confirmacaoS = confirmacao_senha.value;
    var cnpj = cnpj_empresa.value;
    var arroba = email.indexOf("@");
    var emailCorreto=email.endsWith(".com") && arroba > 0;
    var numeroS = senha.indexOf(0)||
    senha.indexOf(1)||
    senha.indexOf(2)||
    senha.indexOf(3)||
    senha.indexOf(4)||
    senha.indexOf(5)||
    senha.indexOf(6)||
    senha.indexOf(7)||
    senha.indexOf(8)||
    senha.indexOf(9);
    
    mensagem_senha.innerHTML='';
    mensagem_confirmacao2.innerHTML='';
    mensagem_nome.innerHTML='';
    mensagem_email.innerHTML='';
    mensagem_cnpj.innerHTML='';
    mensagem_confirmacao1.innerHTML='';
    if(cnpj==''){
        mensagem_cnpj.innerHTML='*Este campo é obrigátorio'
    }
    else if(cnpj.length<14 || cnpj.length>14){
        mensagem_cnpj.innerHTML='Insira um CNPJ válido'
    }
    if(empresa==''){
        mensagem_nome.innerHTML='*Este campo é obrigátorio'
    } 
    if(email==''){
        mensagem_email.innerHTML='*Este campo é obrigátorio'
    }else if(emailCorreto==false){
        mensagem_email.innerHTML+="Email inválido";
    }
    if(confirmacaoE==''){
        mensagem_confirmacao1.innerHTML='*Este campo é obrigátorio'
    }
    else if(email != confirmacaoE){
        mensagem_confirmacao1.innerHTML="Emails não compatíveis";
    }
    
    if(senha==''){
        mensagem_senha.innerHTML+='*Este campo é obrigátorio'
    }
    else if(senha.length < 8){
        mensagem_senha.innerHTML+="Sua senha precisa ter no minímo 8 caracteres";
    }else if(numeroS==false){
        mensagem_senha.innerHTML+='Sua senha precisa ter números'

    }else if(senha.toLowerCase()==senha){
        mensagem_senha.innerHTML+="A senha precisa de uma letra maiúscula";
    } else if(senha.toUpperCase()==senha){
        mensagem_senha.innerHTML+="A senha precisa de uma letra minúscula";
    }else{
        mensagem_senha.innerHTML='';
    }
    if(confirmacaoS==''){
        mensagem_confirmacao2.innerHTML='*Este campo é obrigátorio'
    }
    else if(senha!=confirmacaoS){
        mensagem_confirmacao2.innerHTML="As senhas não são compativeis";
    }else{
        mensagem_confirmacao2.innerHTML=''
    }
}