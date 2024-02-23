const { kafka } = require('./client');

async function init(){
    const producer = kafka.producer();
    console.log("Producer connecting...");

    await producer.connect();
    console.log("Producer connected successfully");

    await producer.send({
        topic: "rider-updates",
        messages: [
            {key: "location-update", value: JSON.stringify({name:"Ram", location:"SOUTH"})}, //can define partition: 0/1/2/3 etc too 
                                                                                                 //that is which partition to send data
            
        ],
    });

    await producer.disconnect();
    console.log("Producer disconnected...");
}

init();