module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('issue_label', {
      issueId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'issue_id',
        references: {
          model: 'issue',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      labelId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'label_id',
        references: {
          model: 'label',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('issue_label');
  },
};
