const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class __name__Controller extends EntityController {
  constructor() {
    // update crud object according to your need
    super('__name__KebabCase__', crud);
    this.routePrefix = '__name__KebabCase__';
  }
}

module.exports = __name__Controller;
