const express = require('express');

const router = express.Router();
const resCode = require('../status');
const MilestoneService = require('../../services/milestone');

router
  .get('/:repositoryId', async (req, res) => {
    const { repositoryId } = req.params;
    try {
      const { milestones } = await MilestoneService.readAll(repositoryId);
      res.status(resCode.OK).json({ message: 'Success', data: milestones });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .post('/:repositoryId', async (req, res) => {
    const { repositoryId } = req.params;
    const milestoneData = req.body;
    milestoneData.repositoryId = repositoryId;
    try {
      const { id } = await MilestoneService.create(milestoneData);
      res.status(resCode.CREATED).json({ message: 'Success', data: id });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .put('/:repositoryId', async (req, res) => {
    const { repositoryId } = req.params;
    const milestoneData = req.body;
    milestoneData.repositoryId = repositoryId;
    try {
      const { id } = await MilestoneService.update(
        milestoneData,
        milestoneData.id
      );
      if (id) res.status(resCode.OK).json({ message: 'Success', data: id });
      else res.status(res.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .delete('/:repositoryId/:milestoneId', async (req, res) => {
    const { milestoneId } = req.params;
    try {
      const deleteCount = await MilestoneService.delete(milestoneId);
      if (deleteCount)
        res
          .status(resCode.OK)
          .json({ message: 'Success', data: { id: milestoneId } });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  });

module.exports = router;
