const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "weather"
});

app.get('/', (re, res) => {
    res.send('Hello World');
});

app.get('/relative-humidity', (req, res) => {
    const statement = "SELECT * FROM relative_humidity";
    db.query(statement, (err, result) => {
        return res.json(result);
    });
});

app.get('/min-temperature', (req, res) => {
    const statement = "SELECT * FROM daily_temperature WHERE type = 'min'";
    db.query(statement, (err, result) => {
        return res.json(result);
    });
});

app.get('/max-temperature', (req, res) => {
    const statement = "SELECT * FROM daily_temperature WHERE type = 'max'";
    db.query(statement, (err, result) => {
        return res.json(result);
    });
});

app.get('/direct-radiation', (req, res) => {
    const statement = "SELECT * FROM direct_radiation";
    db.query(statement, (err, result) => {
        return res.json(result);
    });
});

app.listen(3030, () => {
    console.log('Server is running on port 3030');
});