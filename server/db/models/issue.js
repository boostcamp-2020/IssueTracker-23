const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.issue.hasMany(models.comment);
      models.issue.belongsTo(models.milestone, { foreignKey: 'milestone_id' });
      models.issue.belongsTo(models.user, {
        foreignKey: 'author',
        as: 'issueAuthor',
      });
      models.issue.belongsToMany(models.label, {
        through: 'issue_label',
      });
      models.issue.belongsToMany(models.user, {
        through: 'assignee',
        as: 'assignees',
      });
    }
  }
  Issue.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
      closedAt: DataTypes.DATE,
      issueNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      milestoneId: DataTypes.INTEGER,
      repositoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'issue',
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );
  return Issue;
};
