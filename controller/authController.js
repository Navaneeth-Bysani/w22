const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'wissenaire_22',
    database : 'wissenaire_22'
});


exports.signup = async(req,res) => {
    const userDetails = {

    }
}