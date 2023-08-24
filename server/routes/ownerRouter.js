const Router = require('express');
const router = new Router();
const ownerController = require('../controllers/ownerController');

router.get('/', ownerController.getAll);

module.exports = router;