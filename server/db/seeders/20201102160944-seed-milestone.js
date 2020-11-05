module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'milestone',
      [
        {
          id: 1,
          title: 'milestone1',
          description: 'This is milestone description1',
          due_date: '2020-11-13 16:30:00',
          closed_at: '2020-11-03 19:00:00',
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 2,
          title: 'milestone2',
          description: 'This is milestone description2',
          due_date: null,
          closed_at: null,
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('milestone', null, {});
  },
};
