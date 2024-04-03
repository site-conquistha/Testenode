const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const Express = require("express");
const Nodemailer = require("nodemailer");
dotenv.config();

const app = Express();
//const PORT = process.env.PORT || 3001; Não precisa por ser no domínio

// nodemailer
const transporter = Nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

//definir as origens aceitas
app.use(bodyParser.json());
app.use(
  cors({
    origin: "testenode-cliente.vercel.app/:1",
  })
);
app.options("*",cors());

// rota GET, POST, PUT, DELETE
app.post("/", (req, res) => {
  const { name, subject, text } = req.body;

  const options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Mensagem de ${name}: ${subject}`,
    text: text,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erro ao enviar email.");
    } else {
      console.log("Email enviado com sucesso");
      res.status(200).send("Email enviado com sucesso");
    }
  });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });