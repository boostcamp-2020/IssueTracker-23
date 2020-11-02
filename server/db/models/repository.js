const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Repository extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.repository.hasMany(models.label, { foreignKey: 'repository_id' });
      models.repository.hasMany(models.milestone, {
        foreignKey: 'repository_id',
      });
      models.repository.hasMany(models.issue, { foreignKey: 'repository_id' });
      models.repository.belongsToMany(models.user, {
        through: 'member',
        foreignKey: 'repository_id',
      });
    }
  }
  Repository.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'repository',
      underscored: true,
      freezeTableName: true,
    }
  );
  return Repository;
};
