const path = require("path");
const asyncHandler = require('express-async-handler');

function injectServiceInController(filePath, router) {
  const controller = require(path.resolve(filePath));
  const serviceFilePath = filePath.replace(".controller.", ".service.");
  const service = require(path.resolve(serviceFilePath));
  const controllerInstance = new controller();
  controllerInstance.initController();
  controllerInstance.service = service;
  router.use(`/${controllerInstance.routePrefix}`, controllerInstance.router);
}

function injectModelInService(filePath) {
  const service = require(path.resolve(filePath));
  const modelFilePath = filePath.replace(".service.", ".model.");
  try {
    service.model = require(path.resolve(modelFilePath));
  } catch (error) {
    console.log('No model found, Setting up service without model! Entity Name: ', service.serviceName);
  }
}

function bindMethods(prototype, instance) {
  for (const property of Object.getOwnPropertyNames(prototype)) {
    if (typeof prototype[property] === 'function' && property !== 'constructor' && property !== 'loadRoutes') {
      instance[property] = asyncHandler(prototype[property].bind(instance));
    }
  }

}

module.exports = {
  injectServiceInController,
  injectModelInService,
  bindMethods
};
