const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants')

class PostController extends EntityController{
  constructor() {
    super('post', crud);
    this.routePrefix = 'post';
  }
}

module.exports = PostController;
