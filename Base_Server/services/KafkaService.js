const { Kafka } = require('kafkajs');
const BaseService = require('./BaseService');

class KafkaService extends BaseService {
  constructor() {
    super();
    this.init();
    if (KafkaService.instance) return KafkaService.instance;
    KafkaService.instance = this;
  }

  init() {
    this.kafka = new Kafka({
      clientId: this.config.kafka.clientId,
      brokers: this.config.kafka.brokers
    })
  }

  async initConsumer() {
    this.consumer = this.kafka.consumer({ groupId: this.config.kafka.groupId });
    await this.consumer.connect();
    for (const topic of this.config.kafka.topics)
      await this.consumer.subscribe({ topic, fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const KafkaConsumer = require.main.require('./src/modules/kafka/KafkaConsumer');
          KafkaConsumer.handleIncomingMessage(topic, message.value.toString());
        } catch (error) {
          console.error(error);
        }
      },
    })
  }

  async initProducer() {
    this.producer = this.kafka.producer();
    await this.producer.connect();
    return this.producer;
  }

  async sendMessage(topic, message) {
    if (!this.producer) await this.initProducer();
    try {
      await this.producer.send({
        topic: topic,
        messages: [
          { value: message },
        ]
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new KafkaService();