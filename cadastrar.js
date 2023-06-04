var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect();
    query = "INSERT INTO usuario (login, senha) VALUES ('cadastro@gmail.com', 'testeee');";
    connection.query(query, function(error, results, fields){
        if(error) throw error;
        console.log(results);
    });