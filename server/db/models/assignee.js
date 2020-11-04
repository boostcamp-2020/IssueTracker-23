const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Assignee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Assignee.init(
    {
      userId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      issueId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'assignee',
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Assignee;
};
