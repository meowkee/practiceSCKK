const Router = require('express');
const router = new Router();
const ownerRouter = require('./ownerRouter');
const jobDegreeRouter = require('./jobDegreeRouter');
const eventRouter = require('./eventRouter');
const readerRouter = require('./readerRouter');
const worksiteRouter = require('./worksiteRouter');
const subDivisionRouter = require('./subDivisionRouter');

router.use('/event', eventRouter)
router.use('/jobdegree', jobDegreeRouter)
router.use('/owner', ownerRouter)
router.use('/reader', readerRouter)
router.use('/subdivision', subDivisionRouter)
router.use('/worksite', worksiteRouter)

module.exports = router;