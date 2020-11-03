const db = require('../db/models');

class CommentModel {
  static create({ description, author, issueId }) {
    return db.comment.create({
      description,
      author,
      issueId,
    });
  }

  static readCommentsByIssueId({ issueId }) {
    return db.comment.findAll({ where: { issueId } });
  }

  static update({ commentId, description }) {
    return db.comment.update(
      { description },
      {
        where: { id: commentId },
      }
    );
  }

  static async delete({ commentId }) {
    return db.comment.destroy({ where: { id: commentId } });
  }
}

module.exports = CommentModel;
