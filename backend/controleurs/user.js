const bcrypte = require('bcrypt')
const mysql = require('mysql')
const twilio = require('twilio');

const accountSid = 'AC0b94dd68b332f3483b8f80142c8c2fc8';
const authToken = '0c7a8540100cc76ca52c61e92068dc1e';
const client = twilio(accountSid, authToken);


const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root', 
    password: 'root',
    database: 'aristoshop'
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

exports.login = (req, res, next) => {
    connection.query("SELECT * FROM utilisateur;", (error, results) => {
      if (error) {
        res.status(500).json({ error: "Erreur de serveur" });
      } else if (results.length === 0) {
        res.status(204).json({ message: "La requête réussie mais n'inclut pas de résultats" });
      } else {
        console.log("Vérifier");
        res.json(results);
      }
    });
  };
  
exports.verify = (req, res, next)=>{
        //const { numero } = req.body;
        const min = 100000;
        const max = 999999;
        const codeConfirmation = Math.floor(Math.random() * (max - min + 1)) + min; // Générer votre code de confirmation ici
      
        client.messages
          .create({
            body: `Votre code de confirmation est : ${codeConfirmation}`,
            from: '+12293034679',
            to: '+213557678370'
          })
          .then(() => {
            // Envoi réussi
            res.status(200).json({ message: 'SMS envoyé avec succès' });
          })
          .catch((error) => {
            // Erreur lors de l'envoi
            console.log(error);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'envoi du SMS' });
          });
      

}
