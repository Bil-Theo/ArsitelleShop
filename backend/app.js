const express = require("express")
const cors =  require('cors')
const routeStuff = require("./routes/stuff")
const routeUser = require('./routes/user')


const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors())

app.use('/api/stuff', routeStuff)
app.use('/api/auth', routeUser)

module.exports = app