const express = require('express');
const labelRouter = require('./api/label');
const milestoneRouter = require('./api/milestone');
const commentRouter = require('./api/comment');
const issueRouter = require('./api/issue');

const router = express.Router();

router.use('/labels', labelRouter);
router.use('/milestones', milestoneRouter);
router.use('/comments', commentRouter);
router.use('/issues', issueRouter);

module.exports = router;
