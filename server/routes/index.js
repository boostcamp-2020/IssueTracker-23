const express = require('express');

const router = express.Router();
const labelRouter = require('./api/label');
const commentRouter = require('./api/comment');

router.use('/labels', labelRouter);
router.use('/comments', commentRouter);

module.exports = router;
