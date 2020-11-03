const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    //title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData)
  }

  static readIssueList() {

  }

  static readIssueDetail() {

  }

  static updateIssueDetail() {

  }

  static updateOpenState() {
  }
}

module.exports = IssueModel;
