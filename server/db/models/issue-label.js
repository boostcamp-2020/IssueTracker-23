const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class IssueLabel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  IssueLabel.init(
    {
      issueId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      labelId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'issue_label',
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    }
  );
  return IssueLabel;
};
