const event = require('node:events');

const myEmitter = new event.EventEmitter();
myEmitter.on('test', (message) => {
    console.log('Received message:', message);
});

myEmitter.emit('test', 'hello world');
myEmitter.emit('test', 'node.js is great');


myEmitter.once('test2',(msg)=>{
    console.log('test2emitter',msg)
})
myEmitter.emit('test2', 'hello');
myEmitter.emit('test2', 'hello2'); // not print as test 2 is once 