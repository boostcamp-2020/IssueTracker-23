const LabelModel = require('../models/label');

class LabelService {
  static async create(labelData) {
    if (await LabelService.isDuplicatedName(labelData.name))
      throw Error('title has already been taken');
    const newLabel = await LabelModel.create(labelData);
    return newLabel.id;
  }

  static async readAll(repositoryId) {
    const labels = await LabelModel.read(repositoryId);
    const count = labels.length;
    const labelArray = labels.map((label) => {
      return {
        id: label.id,
        name: label.name,
        description: label.description,
        color: label.color,
      };
    });
    return { count, repositoryId, labels: labelArray };
  }

  static async update(labelData) {
    if (await LabelService.isDuplicatedName(labelData.name))
      throw Error('title has already been taken');
    const [count] = await LabelModel.update(labelData);
    return count === 0 ? null : labelData.id;
  }

  static async delete(labelId) {
    const deletedCount = await LabelModel.delete(labelId);
    return deletedCount === 0 ? null : labelId;
  }

  static async isDuplicatedName(name) {
    const foundLabel = await LabelModel.findLabelByName(name);
    if (foundLabel === null) return false;
    return true;
  }
}

module.exports = LabelService;
