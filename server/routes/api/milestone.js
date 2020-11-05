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
  .post('/:repositoryId', async (req, res) => {})
  .put('/:repositoryId', async (req, res) => {})
  .delete('/:repositoryId/:milestoneId', async (req, res) => {});
