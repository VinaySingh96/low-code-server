const BaseController = require("./BaseController");
const responseHandler = require('../middlewares/responseHandler');
const { bindMethods } = require('../utils/helper')

class EntityController extends BaseController{
  constructor(serviceName, crud){
    super();
    this.serviceName = serviceName;
    this.crud = crud;

    // Bind the methods to the class instance
    bindMethods(EntityController.prototype, this);
    // responseHandler(EntityController);
  }

  initController(){
    this.loadRoutes();
  }

  loadRoutes() {
    if(this.crud.CREATE) this.router.post('/', this.createEntity);
    if(this.crud.READ) this.router.get('/:id', this.getEntityById);
    if(this.crud.READALL) this.router.get('/', this.getAllEntities);
    if(this.crud.UPDATE) this.router.put('/:id', this.updateEntityById);
    if(this.crud.DELETE) this.router.delete('/:id', this.deleteEntityById);
  }

  async createEntity(req, res) {
    // try {
      const data = await this.service.createEntity(req.body, req.params, req.headers);
      res.send({
        data: data,
        message: `${this.serviceName} created successfully 😊`
      })
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).send(error.message);
    // }
  }

  async getAllEntities(req, res) {
    const data = await this.service.getAllEntities(req.body, req.params, req.headers);
    res.send({
      data: data,
      message: `${this.serviceName}s fetched successfully 😊`
    })
  }

  async getEntityById(req, res) {
    throw new Error('Error in get by id')
    const data = await this.service.getEntityById(req.body, req.params, req.headers);
    res.send({
      data: data,
      message: `${this.serviceName} with id fetched successfully 😊`
    })
  }

  async updateEntityById(req, res) {
    const data = await this.service.updateEntityById(req.body, req.params, req.headers);
    res.send({
      data: data,
      message: `${this.serviceName} updated successfully 😊`
    })
  }

  async deleteEntityById(req, res) {
    const data = await this.service.deleteEntityById(req.body, req.params, req.headers);
    res.send({
      data: data,
      message: `${this.serviceName} deleted successfully 😊`
    })
  }
}

module.exports = EntityController;
