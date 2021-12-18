const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'wissenaire_22',
    database : 'wissenaire_22'
});


exports.signup = async(req,res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, phoneNumber VARCHAR(255), studyYear VARCHAR(255), branch VARCHAR(255), institute VARCHAR(255), email VARCHAR(255) PRIMARY KEY email)';
    conn.query(sql, )
    const userDetails = {

    }
}