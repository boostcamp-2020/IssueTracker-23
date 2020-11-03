module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'assignee',
      [
        {
          user_id: 'test_id1',
          issue_id: 1,
        },
        {
          user_id: 'test_id2',
          issue_id: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('assignee', null, {});
  },
};
