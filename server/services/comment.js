const CommentModel = require('../models/comment');

class CommentSevice {
  static async create({ description, author, issueId }) {
    const result = await CommentModel.create({
      description,
      author,
      issueId,
    });
    return { id: result.dataValues.id };
  }

  static async update({ commentId, description }) {
    const [result] = await CommentModel.update({ commentId, description });
    return result === 0 ? null : { id: commentId };
  }

  static async delete({ commentId }) {
    const result = await CommentModel.delete({ commentId });
    return result === 0 ? null : { id: commentId };
  }
}

module.exports = CommentSevice;
