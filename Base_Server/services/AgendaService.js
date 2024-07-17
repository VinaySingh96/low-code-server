const EntityService = require('./EntityService');
const AgendaModel = require('../models/agendaJob')

class AgendaService extends EntityService {
  constructor() {
    super('agenda-job');
    this.serviceName = 'agenda'
    this.model =  AgendaModel;
  }

  
}

module.exports = new AgendaService();
