const express = require('express');
const cors = require('cors');
const conexao = require('./dbconfig');

const app = express();

app.use(cors());
app.use(express.json());


// Rotas aqui


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});