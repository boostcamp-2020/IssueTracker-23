const db = require('../db/models').milestone;
const model = require('../db/models');
const getDateTime = require('../util/date');

class MilestoneModel {
  static create(milestoneData) {
    return db.create(milestoneData);
  }

  static async readAll(repositoryId) {
    const query = `SELECT A.id,A.title,A.description,A.due_date,A.closed_at,A.created_at,A.updated_at,COUNT(if(B.closed_at IS NULL,1,null)) AS nOpen,COUNT(if(B.closed_at IS NOT NULL,B.closed_at,null)) AS nClose
    FROM milestone A 
    LEFT join issue B
    ON A.id = B.milestone_id
    WHERE B.repository_id = :repository_id
    GROUP by A.id`;

    return model.sequelize.query(query, {
      replacements: { repository_id: repositoryId },
    });
  }

  static update(milestoneData, milestoneId) {
    return db.update(milestoneData, {
      where: {
        id: milestoneId,
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

  static updateOpenState(milestoneId, isOpen) {
    const closeAt = isOpen ? null : getDateTime();
    return db.update(
      { closeAt },
      {
        where: {
          milestoneId,
        },
      }
    );
  }
}

module.exports = MilestoneModel;
