module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'issue_label',
      [
        {
          issue_id: 1,
          label_id: 1,
        },
        {
          issue_id: 1,
          label_id: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('issue_label', null, {});
  },
};
