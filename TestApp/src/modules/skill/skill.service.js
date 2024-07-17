const EntityService = require('base_server/services/EntityService');

class SkillService extends EntityService{
  constructor() {
    super('skill');
    if(SkillService.instance) return SkillService.instance;
    SkillService.instance = this;
  }
}

module.exports = new SkillService();
