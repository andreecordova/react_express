const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.get('/employee/list',User.index);
router.post('/employee/create',User.create);
router.get('/employee/get/:id', User.edit);
router.post('/employee/update/:id',User.update);
router.post('/employee/delete/:id',User.remove);

module.exports = router;
