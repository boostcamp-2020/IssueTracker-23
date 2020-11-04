const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Milestone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.milestone.hasMany(models.issue, { foreignKey: 'milestoneId' });
    }
  }
  Milestone.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
      dueDate: DataTypes.DATE,
      closedAt: DataTypes.DATE,
      repositoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'milestone',
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );
  return Milestone;
};
