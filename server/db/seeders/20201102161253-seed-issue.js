module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'issue',
      [
        {
          id: 1,
          title: 'issue1',
          description: 'This is issue description1',
          closed_at: '2020-11-03 19:00:00',
          issue_number: 1,
          author: 'test_id1',
          milestone_id: 1,
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 2,
          title: 'issue2',
          description: 'This is issue description2',
          closed_at: null,
          issue_number: 2,
          author: 'test_id2',
          milestone_id: 1,
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('issue', null, {});
  },
};
