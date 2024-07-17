const EntityService = require('base_server/services/EntityService');

class PostService extends EntityService{
  constructor() {
    super('post');
    if(PostService.instance) return PostService.instance;
    PostService.instance = this;
  }
}

module.exports = new PostService();
