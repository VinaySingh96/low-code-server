const schedule = require('node-schedule');
const BaseService = require('./services/BaseService');


// poll cron jobs from db
// schedule all the crons
// create a kafka consumer for newCronAdded, updatedCron, deletedCron in the kafkaConsumer 

const jobs = {};
function newCronAdded(job, payload) {
  jobs[job] = schedule.scheduleJob(payload.cron, function(){
    console.log('The answer to life, the universe, and everything! --> ', job);
  });
}
function cronUpdated(job, payload) {
  
}
function cronDeleted(job, payload) {
  
}

function handleKafkaMessage(topic, payload) {
  const data = JSON.parse(payload)
  console.log(topic, JSON.parse(payload));
  switch(data.type){
    case 'create': 
      newCronAdded(data.name, data);
      break;
    case 'update':
      cronUpdated(jobs[data.name], data);
      break;
    case 'delete':
      cronDeleted(jobs[data.name], data);
      break;
  }
}

function startCronRunner(){
  const jobsName = ['deleteOldOTP', 'generateTodaysReport'] 
  for (let k=0;k<jobsName.length; k++) {
    jobs[jobsName[k]] =  schedule.scheduleJob('* * * * * *', function(){
      console.log('The answer to life, the universe, and everything! --> ', jobsName[k]);
    });
  }
  
  
}

function initCronRunner(config) {
  BaseService.injectConfig(config);
  try {
    const KafkaService = require('./services/KafkaService');
    const cron = true;
    KafkaService.initConsumer(cron);
    console.log('Kafka consumer started for cron jobs! 🔄');
  } catch (error) {
    console.log('Error while starting kafka consumer :- ', error);
  }
  startCronRunner();
}

module.exports = {
  initCronRunner,
  handleKafkaMessage
}
