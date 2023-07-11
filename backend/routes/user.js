const express = require('express');
const Control = require('../controleurs/user')
const router = express.Router()

router.post('/signup', Control.signup)
router.get('/login', Control.login)

module.exports =  router;