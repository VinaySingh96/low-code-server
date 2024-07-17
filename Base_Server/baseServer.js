const express = require("express");
const cors = require("cors");
const glob = require("glob");
const path = require("path");
const { injectServiceInController, injectModelInService, bindMethods } = require('./utils/helper');
const basePath = process.cwd() + "/src";
const requestHandler = require('./middlewares/requestHandler');
const BaseController = require('./controllers/BaseController');
const BaseService = require('./services/BaseService');
const errorMiddleware = require("./middlewares/errorMiddleware");
const errorHandler = require("./middlewares/errorMiddleware");

async function initServer({ config, mode }) {
  BaseController.injectConfig(config);
  BaseService.injectConfig(config);
  const KafkaService = require('./services/KafkaService');
  switch(mode) {
    case 'api': 
      const app = express();
      app.use(
        cors({
          origin: "*",
          methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
          allowedHeaders: ["Content-Type", "Authorization", "Accept"],
          credentials: true,
        })
      );
      app.use(express.json());
      app.use(requestHandler);
      initServices();
      initControllers(app);
      
      try {
        const producer = await KafkaService.initProducer();
        if(producer) console.log('Kafka producer started successfully! 📡')
        } catch (error) {
        console.log('Unable to start kafka producer -- ', error)
      }
      startServer({ port: 8001, app });
      return app;
    
    case 'kafka':
      KafkaService.initConsumer();

  }
}

function initServices() {
  const modulesPath = glob.sync(`${basePath}/**/*.js`);
  for(const filePath of modulesPath) {
    if (filePath.endsWith(".service.js")) {
      injectModelInService(filePath);
    }
  }
}

function initControllers(app) {
  const modulesPath = glob.sync(`${basePath}/**/*.js`);
  const router = express.Router();
  for (const filePath of modulesPath) {
    if (filePath.endsWith(".controller.js")) {
      injectServiceInController(filePath, router);
    }
  }
  app.use(router);
}

function startServer({ port = 8000, app }) {
  app.get("/", (req, res) => {
    res.send({ Success: true, message: "Hello world!" });
  });
  app.use(errorHandler);
  app.listen(port, "0.0.0.0", () => {
    console.log(`App running on port ${port} 🔥`);
  });
}

module.exports = {
  initServer,
  startServer,
};
