const express = require('express');
const path = require('path');
const mysql = require('mysql');

const authRouter = require('./routes/authRoutes');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

//routes
app.use('/api/v1/auth', authRouter);

module.exports = app;