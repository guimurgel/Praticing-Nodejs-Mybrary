const express = require('express')
const router = express.Router()

//Controllers
const author_controller = require('../controllers/authorsController');

// Authors Routes
router.get('/', author_controller.authors_list)
router.get('/new', author_controller.author_new)
router.get('/:id', author_controller.author_show)
router.get('/:id/edit', author_controller.author_edit)
router.post('/', author_controller.author_create)
router.put('/:id', author_controller.author_update)
router.delete('/:id', author_controller.author_delete)

module.exports = router