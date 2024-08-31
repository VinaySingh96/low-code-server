const config = require('../../config/localDevelopment.json');
const { initCronRunner } = require('base_server/cronRunner')

initCronRunner(config);