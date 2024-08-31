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
    const data = {
      type: 'User Create',
      data: result._doc
    }
    await KafkaService.sendMessage(
      'testTopic',
      JSON.stringify(data)
    );
    // await KafkaService.sendMessage({
    //   topic: 'testTopic',
    //   messages: [{
    //     value: JSON.stringify(data)
    //   }]
    // });
    return result
  }
}

module.exports = new UserService();
