const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    // issueData: title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData);
  }

  static readIssueList(repositoryId) {
    return db.issue.findAll({
      where: { repositoryId },
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
}

module.exports = IssueModel;
