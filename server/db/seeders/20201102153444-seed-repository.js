module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'repository',
      [
        {
          id: 1,
          name: 'repo1',
          description: 'This is repository description1',
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 2,
          name: 'repo2',
          description: 'This is repository description2',
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('repository', null, {});
  },
};
