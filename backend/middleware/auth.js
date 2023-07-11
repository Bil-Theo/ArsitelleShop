const jwt = require('jsonwebtoken')

module.exports  = (req, res, next)=>{

    try{
        const token = req.headers.autorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        const userID = decodedToken.userID

        req.auth = {
            userID : userID
        }
        next()
    }
    catch(error){
        console.log("Erreur liée au serveur..."+error)

        res.status(500).json({message: "Erreur liée au serveur..."})
    }
}