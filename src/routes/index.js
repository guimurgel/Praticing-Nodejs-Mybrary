const express = require('express')
const router = express.Router()

//Controllers
const index_controller = require('../controllers/indexController');

// Index Routes
router.get('/', index_controller.index)

module.exports = router