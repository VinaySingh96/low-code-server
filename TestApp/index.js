const { initServer, startServer } = require("base_server");
const { connectToDatabase } = require('./src/dbUtils/createConnection');
const moment = require('moment');
const config = require('./config/localDevelopment.json');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

async function start() {
  const argv = yargs(hideBin(process.argv)).argv;
  const mode = argv.mode || 'api';
  const app = await initServer({ config, mode });
  await connectToDatabase();
}

start();
