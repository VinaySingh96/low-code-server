const BaseController = require('base_server/controllers/BaseController');
const { bindMethods } = require("../utils/helper");

class __name__Controller extends BaseController {
  constructor(){
    super();
    this.routePrefix = '__name__KebabCase__';
    // Bind the methods to the class instance cuz it does not extends Entity Controller
    bindMethods(__name__Controller.prototype, this);
  }

  initController(){
    this.loadRoutes();
  }

  loadRoutes() {
    // Add your custom routes here
  }
}

module.exports = __name__Controller;
