module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'label',
      [
        {
          id: 1,
          name: 'label1',
          description: 'This is label description1',
          color: 'ff0000',
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 2,
          name: 'label2',
          description: 'This is label description2',
          color: '0000ff',
          repository_id: 1,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('label', null, {});
  },
};
