process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});

class FormSubmit {
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success;
    }

    displayError(){
        this.form.innerHTML = this.settings.error;
    }

    init(){
        if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class:'success'>Mensagem enviada!</h1>",
    error: "<h1 class:'error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();

// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// // process.env.AMBIENTE_PROCESSO = "producao";

// var express = require("express");
// var cors = require("cors");
// var path = require("path");
// var helmet = require("helmet"); // Adicionando o middleware helmet
// var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

// var app = express();

// var indexRouter = require("./src/routes/index");
// var usuarioRouter = require("./src/routes/usuarios");
// var avisosRouter = require("./src/routes/avisos");
// var medidasRouter = require("./src/routes/medidas");
// var aquariosRouter = require("./src/routes/aquarios");
// var empresasRouter = require("./src/routes/empresas");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(cors());

// // Adicionando o middleware helmet para configurar a CSP
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       styleSrc: ["'self'", "'unsafe-inline'", "http://gc.kis.v2.scr.kaspersky-labs.com"],
//       // Adicione outras diretivas conforme necessário
//     },
//   })
// );

// app.use("/", indexRouter);
// app.use("/usuarios", usuarioRouter);
// app.use("/avisos", avisosRouter);
// app.use("/medidas", medidasRouter);
// app.use("/aquarios", aquariosRouter);
// app.use("/empresas", empresasRouter);

// app.listen(PORTA, function () {
//   console.log(
//     `Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
//     Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
//     \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
//     \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
//     \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`
//   );
// });
