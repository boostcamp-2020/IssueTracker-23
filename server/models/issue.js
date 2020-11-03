const db = require('../db/models');
const { update } = require('./comment');

class IssueModel {
  static create(issueData) {
    //issueData: title,description,issueNumber,author,milestoneId,repositoryId
    return db.issue.create(issueData)
  }

  static readIssueList(repositoryId) {
    return db.issue.findAll({ where: { repositoryId } })
  }

  static readIssueDetail({ repositoryId, issueNumber }) {
    return db.issue.findOne({
      where: { issueNumber, repositoryId },
      attributes: ['id', 'title', 'description', 'issueNumber', 'milestone_id', 'repository_id', 'createdAt', 'updatedAt', 'closedAt', 'author']
    })
  }

  static updateIssueDetail( repositoryId, updateIssueData ) {
    //updateIssueData: id, title, description, milestoneId
    return db.issue.update(
      {
        title: updateIssueData.title,
        description: updateIssueData.description,
        milestone_id: updateIssueData.milestoneId
      },
      { where: { repositoryId, issueNumber: updateIssueData.id } }
    )
  }

  static updateOpenState( repositoryId, stateData ) {
    //stateData: id, open
    if (stateData.open) {
      return db.issue.update(
        {
          closedAt: null
        },
        {
          where: { repositoryId, issueNumber: stateData.id }
        }
      )
    }
    return db.issue.update(
      { closedAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
      { where: { repositoryId, issueNumber: stateData.id } }
    )
  }
}

module.exports = IssueModel;
