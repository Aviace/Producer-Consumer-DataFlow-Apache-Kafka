// admin creates topics, partitions, etc in kafka broker/cluster/server

const { kafka } = require('./client');

//creating admin
async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...');
    await admin.connect();
    console.log('Admin connected');

    console.log('Creating topic [rider-updates]');
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log('Topic created success [rider-updates]');

    console.log('Disconnecting admin...');
    await admin.disconnect();
}

//calling the function
init();



