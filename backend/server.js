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

app.listen(3030, () => {
    console.log('Server is running on port 3030');
});