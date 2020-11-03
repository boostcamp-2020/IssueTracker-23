const db = require('../db/models').label;

class LabelModel {
  create = (labelData) => {
    return db.create(labelData);
  }

  read = (repositoryId) => {
    return db.findAll({
      where: {
        repositoryId,
      }
    });
  }

  update = (labelData) => {
    return db.update(labelData, {
      where: {
        id: labelData.id,
      }
    });
  }

  delete = (labelId) => {
    return db.destroy({
      where: {
        id: labelId,
      }
    });
  }
}

const label = new LabelModel();
module.exports = label;