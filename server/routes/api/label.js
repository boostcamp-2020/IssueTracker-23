const express = require('express');

const router = express.Router();
const resCode = require('../status');
const labelService = require('../../services/label');

router
  .post('/:repositoryId', async (req, res) => {
    try {
      const labelData = req.body;
      labelData.repositoryId = req.params.repositoryId;
      const newLabelData = await labelService.create(labelData);
      res.status(resCode.OK).json({ message: 'Success', data: newLabelData });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .get('/:repositoryId', async (req, res) => {
    try {
      const { repositoryId } = req.params;
      const labelList = await (await labelService.readAll(repositoryId)).labels;
      res.status(resCode.OK).json({ message: 'Success', data: labelList });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .put('/:repositoryId', async (req, res) => {
    try {
      const labelData = req.body;
      labelData.repositoryId = req.params.repositoryId;
      const labelId = await labelService.update(labelData);
      if (labelId)
        res.status(resCode.OK).json({ message: 'Success', data: labelId });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .delete('/:repositoryId/:labelId', async (req, res) => {
    try {
      const { labelId } = req.params;
      const deleteId = await labelService.delete(labelId);
      if (deleteId) res.status(resCode.OK).json({ message: 'Success' });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  });

module.exports = router;
