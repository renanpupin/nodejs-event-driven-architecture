const express = require('express');
const app = express();
const EventEmitter = require('events');

//event emmiter listener
const myEmitter = new EventEmitter();
myEmitter.on('request', (params) => {
    console.log(`Received event with name "request" with params:`, params);
});

//express route
app.get('/', (req, res) => {
    myEmitter.emit('request', {foo: "bar"});

    res.json({
        success: true,
        message: "Event has been triggered!"
    });
});

//server listen
app.listen(3000, () => {
    console.log('listening on port 3000!');
});
