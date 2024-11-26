const axios = require("axios");

const NOTION_API_URL = "https://api.notion.com/v1/pages";
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_KEY = process.env.NOTION_API_KEY;

const sendEmailToNotion = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "O email é obrigatório!" });
  }

  try {
    await axios.post(
      NOTION_API_URL,
      {
        parent: { database_id: DATABASE_ID },
        properties: {
          Title: {
            title: [
              {
                text: { content: `Inscrição de: ${email}` }
              }
            ]
          },
          Email: {
            email: email
          }
        }
      },
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28"
        }
      }
    );

    res.status(200).json({ success: "Email enviado ao Notion com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email ao Notion:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao enviar email ao Notion" });
  }
};

module.exports = { sendEmailToNotion };
