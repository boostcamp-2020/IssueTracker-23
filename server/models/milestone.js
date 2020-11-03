const db = require('../db/models').milestone;

class MilestoneModel {
  static create(milestoneData) {
    return db.create(milestoneData);
  }

  static read(repositoryId) {
    return db.findAll({
      where: {
        repositoryId,
      },
    });
  }

  static update(milestoneData) {
    return db.update(milestoneData, {
      where: {
        id: milestoneData.id,
      },
    });
  }

  static delete(milestoneId) {
    return db.destroy({
      where: {
        id: milestoneId,
      },
    });
  }
}

module.exports = MilestoneModel;
