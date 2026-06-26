const express = require('express');
const cors = require('cors');
const conexao = require('./dbconfig');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/usuarios', (req, res) => {
    const {nome, email, senha} = req.body;

    const sql = `INSERT INTO usuarios 
    (nome, email, senha) VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [nome, email, senha],
        (erro, resultado) => {
            if (erro) {
                console.log(erro)
                return res.status(500).json({
                    mensagem: 'Erro ao cadastrar usuário',
                });
            }
            res.json({
                mensagem: 'Usuário cadastrado com sucesso',
            });
        }
    )
});


app.get('/usuarios', (req, res) => {
    const sql = "SELECT * FROM usuarios";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro)
            return res.status(500).json({
                mensagem: 'Erro ao buscar usuários',
            });
        }
        res.json(resultado);
    })
});

app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro)
            return res.status(500).json({
                mensagem: 'Erro ao buscar usuários',
            });
        }
        res.json(resultado);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});