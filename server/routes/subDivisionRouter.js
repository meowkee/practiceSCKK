const Router = require('express');
const router = new Router();
const subDivisionController = require('../controllers/subDivisionController');

router.get('/', subDivisionController.getAll);

module.exports = router;