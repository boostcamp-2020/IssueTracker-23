const { Op } = require('sequelize');
const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    // issueData: title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData);
  }

  static async readIssueList(repositoryId, filterData) {
    const filter = IssueModel.makeFilter(repositoryId, filterData);

    const issues = await db.issue.findAll({
      where: filter,
      include: [
        {
          model: db.label,
          attributes: ['id', 'name', 'color'],
          where: {
            id: filterData.label || { [Op.not]: null },
          },
        },
        {
          model: db.user,
          attributes: ['id', 'userName', 'profile_url'],
          as: 'assignees',
          where: {
            id: filterData.assignee || { [Op.not]: null },
          },
        },
        {
          model: db.comment,
          where: {
            author: filterData.commented || { [Op.not]: null },
          },
        },
        db.milestone,
      ],
    });

    return IssueModel.labelFilter(issues, filterData.label);
  }

  static readIssueDetail(repositoryId, issueNumber) {
    return db.issue.findOne({
      where: { issueNumber, repositoryId },
      include: [
        { model: db.label, attributes: ['id', 'name', 'color'] },
        {
          model: db.user,
          attributes: ['id', 'userName', 'profile_url'],
          as: 'assignees',
        },
        db.comment,
        db.milestone,
      ],
    });
  }

  static updateIssueDetail(repositoryId, issueNumber, updateIssueData) {
    // updateIssueData:  title, description, milestoneId
    return db.issue.update(
      {
        title: updateIssueData.title,
        description: updateIssueData.description,
        milestoneId: updateIssueData.milestoneId,
      },
      { where: { repositoryId, issueNumber } }
    );
  }

  static async setAssignees(issueId, assignees) {
    const foundUsers = await db.user.findAll({ where: { id: assignees } });
    const issue = await db.issue.findOne({ where: { id: issueId } });
    const resultArray = await issue.setAssignees(foundUsers);
    return resultArray;
  }

  static async setLabels(issueId, labels) {
    const foundlabels = await db.label.findAll({ where: { id: labels } });
    const issue = await db.issue.findOne({ where: { id: issueId } });
    const resultArray = await issue.setLabels(foundlabels);
    return resultArray;
  }

  static updateOpenState(repositoryId, issueNumber, isOpen) {
    const openState = isOpen
      ? null
      : new Date().toISOString().slice(0, 19).replace('T', ' ');
    return db.issue.update(
      { closedAt: openState },
      { where: { repositoryId, issueNumber } }
    );
  }

  static makeFilter(repositoryId, filterData) {
    const filter = {
      repositoryId,
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${filterData.q || ''}%`,
          },
        },
        {
          description: {
            [Op.like]: `%${filterData.q || ''}%`,
          },
        },
      ],
    };
    if (filterData.isOpen !== undefined)
      filter.closedAt = filterData.isOpen ? null : { [Op.not]: null };
    if (filterData.author !== undefined) filter.author = filterData.author;
    if (filterData.milestoneId !== undefined)
      filter.milestoneId = filterData.milestoneId;
    return filter;
  }

  static labelFilter(issues, filterLabel) {
    return issues.filter((issue) => {
      return filterLabel ? issue.labels.length >= filterLabel.length : true;
    });
  }
}

module.exports = IssueModel;
