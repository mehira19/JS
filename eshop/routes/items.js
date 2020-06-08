var express = require('express');
var router = express.Router();

const itemsController = require('../controllers/items')

/* GET Items listing. */
router.get('/', itemsController.getAllItems);

router.post('/', itemsController.createItem)

router.get('/:id', itemsController.getItem)

router.put('/:id', itemsController.updateItem)

router.delete('/:id', itemsController.deleteItem)

module.exports = router;