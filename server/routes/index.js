const express = require('express');

const router = express.Router();
const labelRouter = require('./api/label');
const milestoneRouter = require('./api/milestone');

router.use('/labels', labelRouter);
router.use('/milestones', milestoneRouter);
module.exports = router;
