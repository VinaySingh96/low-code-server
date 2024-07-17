const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class SkillCategoryController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('skill-category', crud);
    this.routePrefix = 'skill-category';
  }
}

module.exports = SkillCategoryController;
