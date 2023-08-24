const Router = require('express');
const router = new Router();
const jobDegreeController = require('../controllers/jobDegreeController');

router.get('/', jobDegreeController.getAll);

module.exports = router;