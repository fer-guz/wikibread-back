const { Router } = require('express');
const router = Router();

const {
    getItems,
    createItem,
    getItem,
    updateItem,
    // deleteItem
} = require('../controllers/itemsController')

router.route('/')
    .get(getItems)
    .post(createItem)

router.route('/:id')
    .get(getItem)
    .put(updateItem)
//.delete(deleteItem)

module.exports = router;