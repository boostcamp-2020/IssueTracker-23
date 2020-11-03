const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user, { foreignKey: 'author' });
      models.comment.belongsTo(models.issue, { foreignKey: 'issue_id' });
    }
  }
  Comment.init(
    {
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      issueId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'comment',
      underscored: true,
      freezeTableName: true,
      paranoid: true,
    }
  );
  return Comment;
};
