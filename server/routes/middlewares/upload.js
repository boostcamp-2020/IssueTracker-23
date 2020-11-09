const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');

const ALLOWED_MIMETYPES = ['image/png', 'image/jpeg', 'image/gif'];

const s3 = new aws.S3({
  endpoint: new aws.Endpoint('https://kr.object.ncloudstorage.com'),
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETKEYACCESS,
  region: process.env.REGION,
});

const upload = multer({
  storage: multers3({
    s3,
    bucket: 'issue-tracker-23',
    acl: 'public-read',
    contentType: multers3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, `${new Date().valueOf()}_${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_MIMETYPES.includes(file.mimetype)) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

module.exports = upload;
