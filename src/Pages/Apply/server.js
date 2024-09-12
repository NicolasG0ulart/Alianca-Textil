const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
require('dotenv').config();

// Configurar o transportador de email
const transporter = nodemailer.createTransport({
  service: 'Gmail', // ou outro serviço de email
  auth: {
    user: 'seu-email@gmail.com',
    pass: 'sua-senha' // Para Gmail, use uma senha de app ou OAuth2
  }
});

// Rota para enviar o email
app.post('/send-email', (req, res) => {
  const { name, email, date, phone, job, gender, resume, cover_letter } = req.body;

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'brigolinib@gmail.com',
    subject: 'Nova Candidatura Recebida',
    text: `
      Nome: ${name}
      Email: ${email}
      Data de Nascimento: ${date}
      Telefone: ${phone}
      Cargo: ${job}
      Gênero: ${gender}
      Currículo: ${resume}
      Mensagem de Apresentação: ${cover_letter}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar email:', error);
      res.status(500).send('Erro ao enviar email');
    } else {
      console.log('Email enviado:', info.response);
      res.status(200).send('Email enviado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
