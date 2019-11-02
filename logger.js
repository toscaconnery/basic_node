const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

// logger.log('Hello world');
// logger.log('Hi');
// logger 

// module.exports = Logger;