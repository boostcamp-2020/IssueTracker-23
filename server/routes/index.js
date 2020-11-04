const express = require('express');

const router = express.Router();
const labelRouter = require('./api/label');

router.use('/labels', labelRouter);

module.exports = router;
