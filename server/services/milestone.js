const MilestoneModel = require('../models/milestone');

class MilestoneService {
  static async create(milestoneData) {
    const newMilestone = await MilestoneModel.create(milestoneData);
    return { id: newMilestone.id };
  }
}

module.exports = MilestoneService;
