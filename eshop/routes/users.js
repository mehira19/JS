var express = require('express');
var router = express.Router();

const usersController = require('../controllers/users')

/* GET users listing. */
router.get('/', usersController.getAllUsers);

router.post('/', usersController.createUser)

router.get('/:id', usersController.getUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router;