const mysql = require('mysql');

// Criando nossa conexão com banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Aline1602',
    database: 'agenda'
});

module.exports = conexao