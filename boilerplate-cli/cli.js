const chalk = require("chalk");
const { Command } = require("commander");
const { intro, text, outro, select, multiselect } = require("@clack/prompts");
const program = new Command();
const { generateModuleComponents } = require("./main");
const inquirer = require("inquirer");

async function generateNewModule() {
  program
    .command("module")
    .alias("mod")
    .description(
      "Creating a new module with model, service and controller files."
    )
    .action(async function generateModule() {
      intro("Create a new module");
      const { moduleName, modelRequired } = await inquirer.prompt([
        {
          name: "moduleName",
          type: 'input',
          message: "Enter name of your module."
        },
        {
          name: "modelRequired",
          message: "Choose if model is required.",
          type: "list",
          choices: [
            { value: true, name: "Yes Please, give me model oh yes! 💦" },
            {
              value: false,
              name: "Nah i'm good without this freaking model 🗿",
            }
          ],
        },
      ]);
      const moduleGenerated = await generateModuleComponents(moduleName, modelRequired);
      if (moduleGenerated) {
        outro("Module created 😎 Now build a firing project 🔥");
      }
    });
}

async function runCommands() {
  program.on("command:*", function execCLICommand() {
    const error = chalk.red(
      "Command not supported! \nSee --help for a list of available commands.",
      program.args.join(" ")
    );
    console.log(error);
  });

  await generateNewModule();
  program.parse(process.argv);
}

module.exports = {
  generateNewModule,
  runCommands
}