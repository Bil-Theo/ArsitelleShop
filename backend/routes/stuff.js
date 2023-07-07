const express = require('express')

const router = express.Router()
const stuffControl = require('../controleurs/stuff')

router.post('/', stuffControl.createThing)
  
router.get('/', stuffControl.getThings);

module.exports = router;