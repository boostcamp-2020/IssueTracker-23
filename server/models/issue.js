const { Op } = require('sequelize');
const db = require('../db/models');

class IssueModel {
  static create(issueData) {
    return db.issue.create(issueData);
  }

  static async readList(repositoryId, filterData) {
    const filter = IssueModel.makeFilter(repositoryId, filterData);
    const includeData = [];
    const includeAuthor = {
      model: db.user,
      attributes: ['id', 'userName', 'profileUrl'],
      as: 'issueAuthor',
    };
    const includeLabel = {
      model: db.label,
      attributes: ['id', 'name', 'color'],
    };
    const includeAssignee = {
      model: db.user,
      attributes: ['id', 'profileUrl'],
      as: 'assignees',
    };
    const includeCommented = {
      model: db.comment,
    };
    const includeMilestone = {
      model: db.milestone,
    };
    if (filterData.author)
      includeAuthor.where = {
        id: filterData.author,
      };
    if (filterData.commented)
      includeCommented.where = {
        author: filterData.commented,
      };
    if (filterData.milestoneId)
      includeMilestone.where = {
        id: filterData.milestoneId,
      };
    includeData.push(includeAuthor);
    includeData.push(includeLabel);
    includeData.push(includeAssignee);
    includeData.push(includeCommented);
    includeData.push(includeMilestone);

    const issues = await db.issue.findAll({
      where: filter,
      include: includeData,
    });
    IssueModel.issueFormatter(issues);
    const labelFilteredIssues = await IssueModel.labelFilter(
      issues,
      filterData.label
    );
    return IssueModel.assigneeFilter(labelFilteredIssues, filterData.assignee);
  }

  static read(id) {
    return db.issue.findOne({
      where: { id },
      include: [
        {
          model: db.user,
          attributes: ['id', 'userName', 'profileUrl'],
          as: 'issueAuthor',
        },
        { model: db.label, attributes: ['id', 'name', 'color'] },
        {
          model: db.user,
          attributes: ['id', 'userName', 'profileUrl'],
          as: 'assignees',
        },
        db.comment,
        { model: db.milestone, attributes: ['id'] },
      ],
    });
  }

  static update(updateIssueData) {
    return db.issue.update(
      {
        title: updateIssueData.title,
        description: updateIssueData.description,
        milestoneId: updateIssueData.milestoneId,
        closedAt: updateIssueData.closedAt,
      },
      { where: { id: updateIssueData.id } }
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
      filter.closedAt =
        filterData.isOpen === 'true' ? null : { [Op.not]: null };
    if (filterData.author !== undefined) filter.author = filterData.author;
    if (filterData.milestoneId !== undefined)
      filter.milestoneId = filterData.milestoneId;
    return filter;
  }

  static issueFormatter(issues) {
    issues.forEach((issue) => {
      if (!issue.labels) issue.labels = [];
      if (!issue.assignees) issue.assignees = [];
      if (!issue.milestone) issue.milestone = [];
    });
  }

  static async labelFilter(issues, filterLabel) {
    if (!filterLabel) return issues;

    const labelArray =
      typeof filterLabel === 'string'
        ? [+filterLabel]
        : filterLabel.map((label) => +label);

    return issues.filter((issue) => {
      const labels = [...labelArray];

      return issue.labels.some((label) => {
        const index = labels.indexOf(label.id);
        if (index > -1) labels.splice(index, 1);
        if (labels.length === 0) return true;
        return false;
      });
    });
  }

  static async assigneeFilter(issues, assigneeId) {
    if (!assigneeId) return issues;
    return issues.filter((issue) => {
      return issue.assignees
        .map((assignee) => assignee.id)
        .includes(assigneeId);
    });
  }
}

module.exports = IssueModel;
