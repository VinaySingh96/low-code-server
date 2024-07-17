const EntityService = require('base_server/services/EntityService');

class SkillsService extends EntityService{
  constructor() {
    super('skills');
    if(SkillsService.instance) return SkillsService.instance;
    SkillsService.instance = this;
  }
}

module.exports = new SkillsService();
