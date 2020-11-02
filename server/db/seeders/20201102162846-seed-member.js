module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'member',
      [
        {
          user_id: 'test_id1',
          repository_id: 1,
          role: 'admin',
        },
        {
          user_id: 'test_id2',
          repository_id: 1,
          role: 'write',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('member', null, {});
  },
};
