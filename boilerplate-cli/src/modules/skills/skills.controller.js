const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class SkillsController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('skills', crud);
    this.routePrefix = 'skills';
  }
}

module.exports = SkillsController;
