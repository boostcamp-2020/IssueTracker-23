module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('issue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      closedAt: {
        type: Sequelize.DATE,
        field: 'closed_at',
      },
      issueNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'issue_number',
      },
      author: {
        type: Sequelize.STRING,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      milestoneId: {
        type: Sequelize.INTEGER,
        field: 'milestone_id',
        references: {
          model: 'milestone',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      repositoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'repository_id',
        references: {
          model: 'repository',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('issue');
  },
};
