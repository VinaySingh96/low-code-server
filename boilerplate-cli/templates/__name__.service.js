const EntityService = require('base_server/services/EntityService');

class __name__Service extends EntityService{
  constructor() {
    super('__name__KebabCase__');
    if(__name__Service.instance) return __name__Service.instance;
    __name__Service.instance = this;
  }
}

module.exports = new __name__Service();
