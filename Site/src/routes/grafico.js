const express = require("express");
const router = express.Router();
const graficoController = require("../controllers/graficoController");


router.post("/dadosGraficos", function (req, res) {
    graficoController.dadosGraficos(req, res);
});

module.exports = router;