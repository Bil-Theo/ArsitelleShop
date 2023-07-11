const express = require('express')

const router = express.Router()
const stuffControl = require('../controleurs/stuff')
const auth = require('../middleware/auth')

router.post('/',  stuffControl.createThing)
  
router.get('/', stuffControl.getThings);

module.exports = router;