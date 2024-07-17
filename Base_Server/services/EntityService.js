const BaseService = require('./BaseService');

class EntityService extends BaseService {
  constructor(serviceName) {
    super();
    this.serviceName = serviceName;
  }

  async createEntityPreHook(body, params, query, headers) {
    return { body, params, query, headers };
  }
  async createEntityPostHook(result, params, query, headers) {
    return result;
  }

  async getAllEntitiesPreHook(body, params, query, headers) {
    return { body, params, query, headers };
  }
  async getAllEntitiesPostHook(body, params, query, headers) {
    return { body};
  }

  async getEntityByIdPreHook(body, params, query, headers) {
    return { body, params, query, headers };
  }
  async getEntityByIdPostHook(body, params, query, headers) {
    return { body };
  }

  async updateEntityByIdPreHook(body, params, query, headers) {
    return { body, params, query, headers };
  }
  async updateEntityByIdPostHook(body, params, query, headers) {
    return { body };
  }

  async deleteEntityByIdPreHook( params, query, headers) {
    return { params, query, headers };
  }
  async deleteEntityByIdPostHook(body, params, query, headers) {
    return { body };
  }


  async createEntity(reqBody, reqParams, reqQuery, reqHeaders){
    const { body, params, query, headers } = await this.createEntityPreHook(reqBody, reqParams, reqQuery, reqHeaders);
    const doc = await this.model.create(body);
    return this.createEntityPostHook(doc, params, query, headers);
  }

  async getAllEntities(reqBody, reqParams, reqQuery, reqHeaders){
    const { body, params, query, headers } = await this.createEntityPreHook(reqBody, reqParams, reqQuery, reqHeaders);
    return this.model.find(body.filter);
  }

  async getEntityById(reqBody, reqParams, reqQuery, reqHeaders){
    return this.model.find({ _id: reqParams.id });
  }

  async updateEntityById(reqBody, reqParams, reqQuery, reqHeaders){
    const updatedDoc = await this.model.findByIdAndUpdate(params.id, body, { new: true });
    return updatedDoc;
  }

  async deleteEntityById(reqBody, reqParams, reqQuery, reqHeaders){
    return this.model.findByIdAndDelete(params.id);
  }
}

module.exports = EntityService;
