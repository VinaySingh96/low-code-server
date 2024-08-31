const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class AgendaController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('agenda', crud);
    this.routePrefix = 'agenda';
  }
}

module.exports = AgendaController;
