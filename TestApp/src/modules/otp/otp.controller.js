const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class OtpController extends EntityController {
  constructor() {
    // update crud object according to your need
    super('otp', crud);
    this.routePrefix = 'otp';
  }
}

module.exports = OtpController;
