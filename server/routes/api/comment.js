const express = require('express');

const router = express.Router();
const resCode = require('../status');
const commentService = require('../../services/comment');

router
  .post('/:issueId', async (req, res) => {
    try {
      const commentData = req.body;
      const newCommentData = await commentService.create({
        description: commentData.description,
        author: commentData.authorId,
        issueId: req.params.issueId,
      });
      res
        .status(resCode.CREATED)
        .json({ message: 'Success', data: newCommentData });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .put('/', async (req, res) => {
    try {
      const commentData = req.body;
      const commentId = await commentService.update({
        commentId: commentData.id,
        description: commentData.description,
      });
      if (commentId)
        res.status(resCode.OK).json({ message: 'Success', data: commentId });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .delete('/:commentId', async (req, res) => {
    try {
      const { commentId } = req.params;
      const deleteId = await commentService.delete({ commentId });
      if (deleteId) res.status(resCode.OK).json({ message: 'Success' });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  });

module.exports = router;
