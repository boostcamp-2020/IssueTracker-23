module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('milestone', {
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
        type: Sequelize.TEXT,
      },
      dueDate: {
        type: Sequelize.DATE,
        field: 'due_date',
      },
      closedAt: {
        type: Sequelize.DATE,
        field: 'closed_at',
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
    await queryInterface.dropTable('milestone');
  },
};
