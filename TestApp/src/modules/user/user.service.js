const EntityService = require('base_server/services/EntityService');
const KafkaService = require('base_server/services/KafkaService');
const AgendaService = require('base_server/services/AgendaService');

class UserService extends EntityService{
  constructor() {
    super('user');
    if(UserService.instance) return UserService.instance;
    UserService.instance = this;
  }

  async createEntityPostHook(result, params, query, headers) {
    await KafkaService.sendMessage('testTopic', `Message From Server!`);
    return result
  }
}

module.exports = new UserService();
