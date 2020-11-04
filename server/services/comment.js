const CommentModel = require('../models/comment');

class CommentSevice {
  static create({ description, author, issueId }) {
    return CommentModel.create({
      description,
      author,
      issueId,
    });
  }

  static update({ commentId, description }) {
    return CommentModel.update({ commentId, description });
  }

  static delete({ commentId }) {
    return CommentModel.delete({ commentId });
  }
}

module.exports = CommentSevice;
