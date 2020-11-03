const db = require('../db/models');
const CommentModel = require('../models/comment');

describe('CommentModel.create() 메소드 테스트', () => {
  test('issueId와 author가 존재하는 경우에 새로운 comment 생성 성공', async () => {
    const commentInfo = {
      description: 'comment test 성공',
      issueId: 1,
      author: 'test_id1',
    };

    const newComment = await CommentModel.create(commentInfo);

    expect(newComment.issueId).toBe(commentInfo.issueId);
    expect(newComment.author).toBe(commentInfo.author);
    expect(newComment.description).toBe(commentInfo.description);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
