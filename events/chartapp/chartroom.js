import { EventEmitter } from 'node:events';
export class ChartRoom extends EventEmitter {
    constructor(){
        super()
        this.users = new Set();
    }

    join(user){
        this.users.add(user);
        this.emit('join', user);
    }
   
    sendMessage(user, message){
        if(this.users.has(user)){
            this.emit('sendMessage', user, message);
        }else{
            console.log('User not in the chat room');
        }
}

 leave(user){
         if(this.users.has(user)){
        this.users.delete(user);
        this.emit('leave', user);
         } else{
            console.log('User not in the chat room');

         }
    }
}