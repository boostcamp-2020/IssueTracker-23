const express = require('express');
const labelRouter = require('./api/label');
const milestoneRouter = require('./api/milestone');
const commentRouter = require('./api/comment');

const router = express.Router();

router.use('/labels', labelRouter);
router.use('/milestones', milestoneRouter);
router.use('/comments', commentRouter);

module.exports = router;
