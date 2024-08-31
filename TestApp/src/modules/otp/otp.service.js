const EntityService = require('base_server/services/EntityService');
const { generateOTP } = require('../../../utils/generateOtp');
const KafkaService = require('base_server/services/KafkaService');

class OtpService extends EntityService{
  constructor() {
    super('otp');
    if(OtpService.instance) return OtpService.instance;
    OtpService.instance = this;
  }

  async createEntityPreHook(body, params, query, headers) {
    // delete the old otp if exists for the same number
    await this.model.findOneAndRemove({ phoneNumber: body.phoneNumber });
    body.otp = generateOTP(4);
    // await KafkaService.sendMessage(
    //   'cronJob',
    //   JSON.stringify({...body, name: 'newCron', type: 'create', cron: '*/2 * * * * *'})
    // );
    return {body, params, query, headers};
  }
}

module.exports = new OtpService();
