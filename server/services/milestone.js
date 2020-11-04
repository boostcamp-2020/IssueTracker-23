const MilestoneModel = require('../models/milestone');

class MilestoneService {
  static async create(milestoneData) {
    if (
      await MilestoneService.isDuplicatedTitle(
        milestoneData.title,
        milestoneData.repositoryId
      )
    )
      throw Error('title has already been taken');
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
    if (
      await MilestoneService.isDuplicatedTitle(
        milestoneData.title,
        milestoneData.repositoryId,
        milestoneId
      )
    )
      throw Error('title has already been taken');
    const [count] = await MilestoneModel.update(milestoneData, milestoneId);
    return count === 0 ? null : { id: milestoneId };
  }

  static async delete(milestoneId) {
    const deletedCount = await MilestoneModel.delete(milestoneId);
    return deletedCount === 0 ? null : { id: milestoneId };
  }

  static async isDuplicatedTitle(title, repositoryId, milestoneId = null) {
    const foundMilestone = await MilestoneModel.findMilestoneByTitle(
      title,
      repositoryId,
      milestoneId
    );
    if (foundMilestone === null) return false;
    return true;
  }
}

module.exports = MilestoneService;
