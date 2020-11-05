module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      userName: {
        type: Sequelize.STRING,
        field: 'user_name',
      },
      profileUrl: {
        type: Sequelize.STRING,
        field: 'profile_url',
      },
      oauthType: {
        type: Sequelize.STRING,
        field: 'oauth_type',
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
    await queryInterface.dropTable('user');
  },
};
