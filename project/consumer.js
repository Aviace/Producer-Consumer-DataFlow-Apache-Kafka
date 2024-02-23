const {kafka} = require('./client');

async function init(){
    const consumer = kafka.consumer({groupId: "location-group"});
    console.log("consumer connecting...");

    await consumer.connect();
    console.log("consumer connected successfully");

    await consumer.subscribe({topic: "rider-updates", fromBeginning: true});

    await consumer.run({
        eachMessage: async({topic, partition, message, heartbeat, pause}) => {
            console.log(`[${topic}]: PART:${partition}`, message.value.toString())
        }
    })
}

init();