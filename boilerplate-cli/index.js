#!/usr/bin/env node
const chalk = require("chalk");
const { runCommands } = require("./cli");

function nodeVersionVerify() {
  const currentNodeVersion = process?.versions?.node.split(".")[0];
  const ExpectedNodeVersion = 18;
  if (currentNodeVersion < ExpectedNodeVersion) {
    const errorLog = chalk.red(
      `You are using node version ${currentNodeVersion}. Please upgrade to version ${ExpectedNodeVersion} or above!`
    );
    console.log(errorLog);
    process.exit(1);
  }
}

async function start() {
  nodeVersionVerify();
  await runCommands();
}

start();
