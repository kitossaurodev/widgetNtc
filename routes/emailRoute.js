const express = require("express");
const { sendEmailToNotion } = require("../controllers/emailController");
const router = express.Router();

// Rota para receber os dados do formulário
router.post("/", sendEmailToNotion);

module.exports = router;
