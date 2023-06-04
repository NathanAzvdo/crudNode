var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect();
    query = "DELETE FROM usuario WHERE login='teste@gmail.com';";
    connection.query(query, (error, results, fields) => {
            if (error)
                throw error;
            console.log(results);
        });