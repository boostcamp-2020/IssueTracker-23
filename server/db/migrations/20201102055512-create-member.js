module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('member', {
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
      repositoryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'repository_id',
        references: {
          model: 'repository',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['admin', 'maintain', 'write'],
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('member');
  },
};
