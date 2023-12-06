var express = require("express");
var path = require("path");  // Adicione esta linha para importar o módulo path
var router = express.Router("");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/html/sprint3/projeto.html"));
});

module.exports = router;