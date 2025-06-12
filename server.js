const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/cadastro', (req, res) => {
  const {
    nome,
    sobrenome,
    cpf,
    genero,
    data_nascimento,
    telefone,
    celular,
    email,
    cep,
    endereco,
    numero,
    complemento,
    cidade,
    estado,
    senha
  } = req.body;

  const senha_hash = senha;
  const query = `
    INSERT INTO cliente (
      nome, sobrenome, cpf, genero, data_nascimento,
      telefone, celular, email, cep, endereco,
      numero, complemento, cidade, estado, senha_hash
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    nome, sobrenome, cpf, genero, data_nascimento,
    telefone, celular, email, cep, endereco,
    numero, complemento, cidade, estado, senha_hash
  ], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).json({ mensagem: 'Erro ao cadastrar cliente' });
    }
    res.status(200).json({ mensagem: 'Cliente cadastrado com sucesso!' });
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
