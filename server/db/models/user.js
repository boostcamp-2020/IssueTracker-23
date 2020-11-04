const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.issue, { foreignKey: 'author' });
      models.user.hasMany(models.comment, { foreignKey: 'author' });
      models.user.belongsToMany(models.repository, {
        through: 'member',
        foreignKey: 'userId',
      });
      models.user.belongsToMany(models.issue, {
        through: 'assignee',
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      profileUrl: DataTypes.STRING,
      oauthType: DataTypes.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: 'user',
      underscored: true,
    }
  );
  return User;
};
