const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    // issueData: title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData);
  }

  static readIssueList(repositoryId) {
    return db.issue.findAll({ where: { repositoryId } });
  }

  static readIssueDetail(repositoryId, issueNumber) {
    return db.issue.findOne({
      where: { issueNumber, repositoryId },
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
