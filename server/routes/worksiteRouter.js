const Router = require('express');
const router = new Router();
const worksiteController = require('../controllers/worksiteController');

router.get('/', worksiteController.getAll);

module.exports = router;