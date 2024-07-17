const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const { generateTemplateFilesBatch } = require("generate-template-files");

async function generateModuleComponents(moduleName, modelRequired = true) {
  const modulePath = path.join(process.cwd(), "src/modules/", moduleName);
  if (fs.existsSync(modulePath)) {
    const error = chalk.red(
      "Another module exists with the same name andhee, chal abhi dusra name de!"
    );
    console.log(error);
    process.exit(1);
  }

  await generateController(moduleName, modelRequired);
  await generateService(moduleName, modelRequired);
  if (modelRequired) await generateModel(moduleName);
  return true;
}

async function generateController(name, withModel) {
  try {
    const controllerTypeTemplatePath = withModel ? './templates/__name__.controller.js' : './templates/__base__.controller.js';
    const controllerRoutePath = process.cwd() + `/src/modules/${name}/`;
    const controllerOption = {
      option: "Create Controller",
      defaultCase: "(pascalCase)",
      entry: {
        folderPath: path.resolve(__dirname, controllerTypeTemplatePath),
      },
      dynamicReplacers: [
        { slot: "__name__", slotValue: name },
        { slot: "__base__", slotValue: name },
      ],
      output: {
        path: `${controllerRoutePath}__name__(camelCase).controller.js`,
        pathAndFileNameDefaultCase: "(camelCase)",
      },
    };
    await generateTemplateFilesBatch([controllerOption]).catch(err => console.log(err));
    console.log(chalk.yellowBright('✅ Controller Created Yey!'))
    return `${controllerRoutePath}${name}Controller.js`;
  } catch (error) {
    console.log(chalk.red(error));
  }
}

async function generateService(name, withModel) {
  try {
    const serviceTypeTemplatePath = withModel ? './templates/__name__.service.js' : './templates/__base__.service.js';
    const serviceRoutePath = process.cwd() + `/src/modules/${name}/`;
    const serviceOption = {
      option: "Create Service",
      defaultCase: "(pascalCase)",
      entry: {
        folderPath: path.resolve(__dirname, serviceTypeTemplatePath),
      },
      dynamicReplacers: [
        { slot: "__name__", slotValue: name },
        { slot: "__base__", slotValue: name },
      ],
      output: {
        path: `${serviceRoutePath}__name__(camelCase).service.js`,
        pathAndFileNameDefaultCase: "(camelCase)",
      },
    };
    await generateTemplateFilesBatch([serviceOption]).catch(err => console.log(err));
    console.log(chalk.yellowBright('✅ Service Created Yey!'))
    return `${serviceRoutePath}${name}Service.js`;
  } catch (error) {
    console.log(chalk.red(error));
  }
}

async function generateModel(name) {
  try {
    const modelTemplatePath = './templates/__name__.model.js';
    const modelRoutePath = process.cwd() + `/src/modules/${name}/`;
    const modelOption = {
      option: "Create Service",
      defaultCase: "(pascalCase)",
      entry: {
        folderPath: path.resolve(__dirname, modelTemplatePath),
      },
      dynamicReplacers: [
        { slot: "__name__", slotValue: name },
        { slot: "__base__", slotValue: name },
      ],
      output: {
        path: `${modelRoutePath}__name__(camelCase).model.js`,
        pathAndFileNameDefaultCase: "(camelCase)",
      },
    };
    await generateTemplateFilesBatch([modelOption]).catch(err => console.log(err));
    console.log(chalk.yellowBright('✅ Model Created Yey!'))
    return `${modelRoutePath}${name}Model.js`;
  } catch (error) {
    console.log(chalk.red(error));
  }
}

module.exports = {
  generateModuleComponents,
  generateController,
  generateService,
  generateModel,
};
