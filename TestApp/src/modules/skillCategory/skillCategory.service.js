const EntityService = require('base_server/services/EntityService');

class SkillCategoryService extends EntityService{
  constructor() {
    super('skill-category');
    if(SkillCategoryService.instance) return SkillCategoryService.instance;
    SkillCategoryService.instance = this;
  }
}

module.exports = new SkillCategoryService();
