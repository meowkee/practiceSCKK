const Router = require('express');
const router = new Router();
const userController = require('../controllers/eventController');

router.get('/', userController.getAll);

module.exports = router;