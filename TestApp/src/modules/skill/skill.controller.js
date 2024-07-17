const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class SkillController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('skill', crud);
    this.routePrefix = 'skill';
  }
}

module.exports = SkillController;
