const express = require("express");
const { sendEmailToNotion } = require("../controllers/emailController");
const router = express.Router();

// Rota para enviar email ao Notion
router.post("/", sendEmailToNotion);

module.exports = router;
