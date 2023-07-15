const express = require('express');
const Control = require('../controleurs/user')
const router = express.Router()

router.post('/signup', Control.signup)
router.post('/login', Control.login)
router.get('/sms', Control.verify)

module.exports =  router;