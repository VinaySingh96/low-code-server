const { toPascalCase } = require('base_server/utils/textCase')

class KafkaConsumer {
  constructor() {
    if (KafkaConsumer.instance) return KafkaConsumer.instance;
    KafkaConsumer.instance = this;
  }

  // messageFromTestTopic(message){
  //   console.log(message);
  // }

  // Example Use case: For Uber if topic is location send location to user directly

  handleIncomingMessage(topic, message) {
    if (typeof this[`messageFrom${toPascalCase(topic)}`] === 'function') this[`messageFrom${toPascalCase(topic)}`](message);
    else this.defaultMessageHandler(topic, message)
  }
  
  defaultMessageHandler(topic, message) {
    console.log('Kafka message received : ', { topic, message });
  }
}

module.exports = new KafkaConsumer();