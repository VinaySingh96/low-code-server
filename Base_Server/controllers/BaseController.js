const express = require('express');

class BaseController {
  constructor() {
    this.router = express.Router();
    this.config = BaseController.config;
    this.packages = BaseController.packages;
    this.service = BaseController.service;
  }

  static injectConfig(config) {
    BaseController.config = config;
  }

  injectConfig(packages) {
    BaseController.packages = packages;
  }

  injectService(service) {
    BaseController.service = service;
  }
}

module.exports = BaseController;