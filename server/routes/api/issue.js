const express = require('express');

const router = express.Router();
const resCode = require('../status');
const issueService = require('../../services/issue');

router
  .post('/:repositoryId', async (req, res) => {
    try {
      const issueData = req.body;
      const { repositoryId } = req.params;
      const { id } = await issueService.create(repositoryId, issueData);
      res.status(resCode.CREATED).json({ message: 'Success', data: { id } });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .get('/:repositoryId', async (req, res) => {
    try {
      const { repositoryId } = req.params;
      const filterData = req.query;
      const issues = await issueService.readList(repositoryId, filterData);
      res.status(resCode.OK).json({ message: 'Success', data: issues });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .get('/:repositoryId/:issueId', async (req, res) => {
    try {
      const { issueId } = req.params;
      const issue = await issueService.read(issueId);
      res.status(resCode.OK).json({ message: 'Success', data: issue });
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  })
  .put('/', async (req, res) => {
    try {
      const issueData = req.body;
      const { id } = await issueService.update(issueData);
      if (id) res.status(resCode.OK).json({ message: 'Success', data: { id } });
      else res.status(resCode.NOT_FOUND).send('fail');
    } catch (err) {
      res.status(resCode.INTERNAL_SERVER_ERROR).send('fail');
    }
  });

module.exports = router;
