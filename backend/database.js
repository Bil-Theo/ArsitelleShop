const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root', 
    password: 'root',
    database: 'aristoshop'
})
//UwAmp\bin\database\mysql-5.7.11
connection.connect((error)=>{
    if(error){
        console.error("Connexion à la base de donnée Mysql echouée")
        return;
    }
    else{
        console.log("Connexion à la base de donnée MySql reussie...");
    }
})

module.exports = connection;