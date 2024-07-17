const EntityService = require('base_server/services/EntityService');

class CommentService extends EntityService{
  constructor() {
    super('post');
    if(CommentService.instance) return CommentService.instance;
    CommentService.instance = this;
  }
}

module.exports = new CommentService();
