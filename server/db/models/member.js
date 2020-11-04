const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Member.init(
    {
      userId: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      repository_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'member',
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Member;
};
