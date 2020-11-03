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

  static async readCommentsByIssueId() {
    // TODO: issue 작성된 comment를 모두 읽어오는 메소드
  }

  static async update() {
    // TODO: 해당 comment 수정
  }

  static async delete() {
    // TODO: 해당 comment 삭제
  }
}

module.exports = CommentModel;
