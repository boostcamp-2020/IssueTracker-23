const express = require('express');
const resCode = require('../status');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  if (req.file)
    res
      .status(resCode.OK)
      .json({ message: 'Success', imageUrl: req.file.location });
  else
    res
      .status(resCode.BAD_REQUSET)
      .send('png/jpeg/gif 파일 형식만 업로드 가능합니다.');
});

module.exports = router;
