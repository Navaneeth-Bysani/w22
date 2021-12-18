const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});


exports.signup = async(req,res) => {
    let sql = 'SELECT * from user;';
    conn.query(sql, (err,rows) => {
        if(err) throw err;
        console.log(rows);
    });
}