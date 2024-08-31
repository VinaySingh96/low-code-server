const EntityService = require('base_server/services/EntityService');

class AgendaService extends EntityService{
  constructor() {
    super('agenda');
    if(AgendaService.instance) return AgendaService.instance;
    AgendaService.instance = this;
  }
}

module.exports = new AgendaService();
