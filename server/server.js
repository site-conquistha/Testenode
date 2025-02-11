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
    origin: "https://conquistha.com.br",
    methods: "POST"
  })
);
//app.options("*",cors());

app.get("/", (req, res) => {
  res.status(200).send("Servidor iniciado corretamente");
})

// rota GET, POST, PUT, DELETE
app.post("/api", (req, res) => {
  const { name, subject, text } = req.body;
  console.log(req.body)

  const options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_1,
    subject: `${name}: ${subject}`,
    text: text,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
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