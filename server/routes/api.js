const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.get('/list',User.index);
router.post('/create',User.create);
router.get('/get/:id', User.edit);
router.post('/update/:id',User.update);
router.post('/delete/:id',User.remove);

module.exports = router;
