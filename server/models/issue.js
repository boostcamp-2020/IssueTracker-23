const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    //title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData)
  }

  static readIssueList({ repositoryId }) {
    return db.issue.findAll({ where: { repositoryId } })
  }

  static readIssueDetail({ repositoryId, issueNumber }) {
    return db.issue.findOne({
      where: { issueNumber, repositoryId },
      attributes: ['id', 'title', 'description', 'issueNumber', 'milestone_id', 'repository_id', 'createdAt', 'updatedAt', 'closedAt', 'author']
    })
  }

  static updateIssueDetail() {

  }

  static updateOpenState() {
  }
}

module.exports = IssueModel;
