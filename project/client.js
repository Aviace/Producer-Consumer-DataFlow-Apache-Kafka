const { Kafka } = require("kafkajs");

// creating kafka client
exports.kafka = new Kafka({
    clientId: "demo-my-app",
    brokers:['192.168.122.241:9092'],
});

