const express = require('express')
const router = express.Router()

//Controllers
const books_controller = require('../controllers/booksController');

// Books Routes
router.get('/', books_controller.books_list)
router.get('/new', books_controller.book_new)
router.get('/:id', books_controller.book_show)
router.get('/:id/edit', books_controller.book_edit)
router.post('/', books_controller.book_create)
router.put('/:id', books_controller.book_update)
router.delete('/:id', books_controller.book_delete)

module.exports = router