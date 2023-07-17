const argon2  =  require('argon2')
const twilio = require('twilio');
const jwt =  require('jsonwebtoken')

const accountSid = 'AC0b94dd68b332f3483b8f80142c8c2fc8';
const authToken = '0c7a8540100cc76ca52c61e92068dc1e';
const client = twilio(accountSid, authToken);

const connection = require('../database')

exports.signup = async(req, res, next)=>{

  const user = req.body
  user.tel = '+242'+user.tel

 // console.log(user)


  const hash = await argon2.hash(user.password)
        connection.query('INSERT INTO utilisateur(id, nom, prenom, adresse, tel, mdps) VALUES(null, ?, ?, ?, ?, ?);', [user.nom, user.prenom, user.adresse, user.tel, hash], (error, results)=>{
              if(error){
                  if(error.sqlMessage.includes('tel')){
                    res.status(400).json({probleme: 'Il existe déjà un compte avec ce numéro de téléphone.'})
                  }
                  else{
                    res.status(500).json({ error: "Erreur de serveur" });
                  }
            }
            else{
              res.status(201).json({success: 'Votre compte a été crée avec succès. Veuillez-vous connecter!'})
            }
        })
        



}

exports.login = async(req, res, next) => {

    

    connection.query("SELECT * FROM utilisateur WHERE tel = ?;", ['+242'+req.body.tel], async (error, results) => {
      if (error) {  
        res.status(500).json({ error: "Erreur de serveur" });
      } 
      else if (results.length === 0) {
        res.status(204).json({ message: 'numero ou mot de passe incorrect!' });
      }
      else {
            const valid = await argon2.verify(results[0].mdps, req.body.password);
            if(!valid){
              const message = JSON.stringify({ 'message': 'numero ou mot de passe incorrect!' })
              res.status(204).json(message);
            }
            else{
                res.status(200).json({
                  user: results,
                  token: jwt.sign(
                      { userId: results[0].id },
                      'RANDOM_TOKEN_SECRET',
                      { expiresIn: '24h' }
                  )
              });
            }
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


/*{
  nom: 'BIL',
  prenom: 'Théo ',
  adresse: 'Bebd ',
  tel: '+242068838343',
  password: 'bilt11'
}*/