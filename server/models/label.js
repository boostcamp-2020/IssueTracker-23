const { Op } = require('sequelize');
const db = require('../db/models').label;

class LabelModel {
  static create(labelData) {
    return db.create(labelData);
  }

  static read(repositoryId) {
    return db.findAll({
      where: { repositoryId },
    });
  }

  static findByName(name, repositoryId, labelId = null) {
    return db.findOne({
      where: {
        name,
        repositoryId,
        id: {
          [Op.not]: labelId,
        },
      },
    });
  }

  static update(labelData) {
    return db.update(labelData, {
      where: {
        id: labelData.id,
      },
    });
  }

  static delete(labelId) {
    return db.destroy({
      where: {
        id: labelId,
      },
    });
  }
}

module.exports = LabelModel;
