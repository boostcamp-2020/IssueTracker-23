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

    expect(typeof newComment.id).toBe('number');
    expect(newComment.issueId).toBe(commentInfo.issueId);
    expect(newComment.author).toBe(commentInfo.author);
    expect(newComment.description).toBe(commentInfo.description);
  });

  test('issueId가 존재하지 않는 경우 새로운 comment 생성 실패', async () => {
    const commentInfo = {
      description: 'comment test 실패',
      issueId: 0,
      author: 'test_id1',
    };

    await expect(async () => {
      await CommentModel.create(commentInfo);
    }).rejects.toThrow();
  });

  test('author가 존재하지 않는 경우 새로운 comment 생성 실패', async () => {
    const commentInfo = {
      description: 'comment test 실패',
      issueId: 1,
      author: '없는 id',
    };

    await expect(async () => {
      await CommentModel.create(commentInfo);
    }).rejects.toThrow();
  });
});

afterAll(async () => {
  await db.sequelize.close();
});
