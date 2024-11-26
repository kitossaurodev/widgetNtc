const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "frontend"))); // Servir arquivos frontend

// Rotas
app.use("/api/emails", emailRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
