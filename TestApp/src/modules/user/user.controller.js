const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class UserController extends EntityController{
  constructor() {
    super('user', crud);
    this.routePrefix = 'user';
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.get('/custom-route', this.handleCustomRoute);
    super.loadRoutes();
  }

  handleCustomRoute(req, res) {
    console.log('This is a custom route');
    throw new Error('Error in custom route')
    res.status(200).send('Handled custom routes successfully, response received 🔥');
  }

}

module.exports = UserController;