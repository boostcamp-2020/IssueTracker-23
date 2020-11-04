const MilestoneModel = require('../models/milestone');

class MilestoneService {
  static async create(milestoneData) {
    const newMilestone = await MilestoneModel.create(milestoneData);
    return { id: newMilestone.id };
  }

  static async readAll(repositoryId) {
    const milestones = await MilestoneModel.readAll(repositoryId);
    const count = milestones.length;
    const milestoneArray = milestones.map(([milestone]) => {
      return {
        id: milestone.id,
        title: milestone.title,
        description: milestone.description,
        dueDate: milestone.due_date,
        numberOfTotalIssues: milestone.nTotal,
        numberOfClosedIssues: milestone.nClose,
      };
    });
    return { count, repositoryId, milestones: milestoneArray };
  }

  static async update(milestoneData, milestoneId) {
    const [count] = await MilestoneModel.update(milestoneData, milestoneId);
    return count === 0 ? null : { id: milestoneId };
  }

  static async delete(milestoneId) {
    const deletedCount = await MilestoneModel.delete(milestoneId);
    return deletedCount === 0 ? null : { id: milestoneId };
  }
}

module.exports = MilestoneService;
