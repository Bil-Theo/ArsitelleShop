const bcrypte = require('bcrypt')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root', 
    password: 'root',
    database: 'cawa'
})
//UwAmp\bin\database\mysql-5.7.11
connection.connect((error)=>{
    if(error){
        console.error("Error de connection: "+error.stack)
        return;
    }
    else{
        console.log("Connexion basse de donnée MySql reussie...");
    }
})

exports.signup = (req, res, next)=>{

}

exports.login = (req, res, next)=>{
    
    connection.query("SELECT * FROM myuser", (error, results)=>{
        if(error){
            res.status(500).json({message: "Erreur de serveur"})
        }
        else if(results.lenght==0){
            res.status(204).json({message: "La requete reussie mais n'inclut pas de resultats"})
        }
        else{
            res.status(200).json(results)
        }
    })

}