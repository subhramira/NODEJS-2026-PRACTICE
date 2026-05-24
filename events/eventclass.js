const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b,);
});
myEmitter.emit('event', 'hi', 'subhransu');

// error event
myEmitter.on('error', (err) => {
  console.log('Error', err);
});

myEmitter.emit('error', new Error('Something went wrong !!!'));