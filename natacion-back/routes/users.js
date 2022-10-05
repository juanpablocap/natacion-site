const { Router } = require('express');
const { getUsers, addUser, deleteUser} = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.post('/', addUser);

router.delete('/', deleteUser);


module.exports = router