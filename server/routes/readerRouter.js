const Router = require('express');
const router = new Router();
const readerController = require('../controllers/readerController');

router.get('/', readerController.getAll);

module.exports = router;