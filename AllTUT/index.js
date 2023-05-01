const logEvents = require('./logEvents');

const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter {}

// Initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit event
    myEmitter.emit('log', 'Log event emmited!!');
}, 2000);
