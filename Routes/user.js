const path = require('path');
const express = require('express');

const userController = require('../Controllers/user');

const router = express.Router();

router.post('/userdata', userController.postAddData);
router.get('/getuserdata', userController.getProducts);
router.delete('/deleteuserdata/:prodid', userController.postProductsdelete)

module.exports = router;
