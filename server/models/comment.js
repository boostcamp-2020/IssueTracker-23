const db = require('../db/models');

class CommentModel {
  static async create({ description, author, issueId }) {
    const newComment = await db.comment.create({
      description,
      author,
      issueId,
    });
    return newComment;
  }

  static async readCommentsByIssueId({ issueId }) {
    const comments = await db.comment.findAll({ where: { issueId } });
    return comments;
  }

  static async update({ commentId, description }) {
    const updatedComment = await db.comment.update(
      { description },
      {
        where: { id: commentId },
      }
    );
    return updatedComment;
  }

  static async delete() {
    // TODO: 해당 comment 삭제
  }
}

module.exports = CommentModel;
