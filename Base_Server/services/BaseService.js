
class BaseService {
  constructor() {
    this.config = BaseService.config;
    this.packages = BaseService.packages;
  }

  static injectConfig(config) {
    BaseService.config = config;
  }

  static injectPackages(packages) {
    BaseService.packages = packages;
  }
}

module.exports = BaseService;
