const EntityController = require('base_server/controllers/EntityController');
const { crud } = require('base_server/utils/constants');

class CommentController extends EntityController {
  constructor(){
    super('comment', crud);
    this.routePrefix = 'comment';
  }
}

module.exports = CommentController;
