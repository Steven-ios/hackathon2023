var express = require('express');
var app = express();

app.get('/login', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
    database: 'my_db'
    })

    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
    res.send("Yo");
})


app.listen(3000, () => {
    console.log('listeining in poret 30')
})
