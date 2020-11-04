const LabelModel = require('../models/label');

class LabelService {
  static async create(labelData) {
    if (await LabelService.isDuplicatedName(labelData.name))
      throw Error('title has already been taken');
    const newLabel = await LabelModel.create(labelData);
    return newLabel.id;
  }

  // read()

  // update()

  // delete()

  static async isDuplicatedName(name) {
    const foundLabel = await LabelModel.findLabelByName(name);
    if (foundLabel === null) return false;
    return true;
  }
}

module.exports = LabelService;
