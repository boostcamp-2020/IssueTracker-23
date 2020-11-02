module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assignee', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: 'user_id',
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
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
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('assignee');
  },
};
