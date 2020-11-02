module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'comment',
      [
        {
          id: 1,
          description: 'This is comment description1',
          deleted_at: '2020-11-03 19:00:00',
          author: 'test_id1',
          issue_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 2,
          description: 'This is comment description2',
          deleted_at: null,
          author: 'test_id2',
          issue_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('comment', null, {});
  },
};
