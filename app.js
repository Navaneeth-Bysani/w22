const express = require('express');
const mysql = require('mysql');

const authRouter = require('./routes/authRoutes');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'wissenaire_22',
    database : 'wissenaire_22'
});

// conn.connect((err) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log('mysql connect successfully!');
//     }
// });

const app = express();
app.use(express.json());

//routes
app.use('/api/v1/auth', authRouter);

module.exports = app;