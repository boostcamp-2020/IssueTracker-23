const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.label.belongsToMany(models.issue, {
        through: 'issue_label',
        foreignKey: 'label_id',
      });
    }
  }
  Label.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
      color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      repositoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'label',
      underscored: true,
      freezeTableName: true,
    }
  );
  return Label;
};
