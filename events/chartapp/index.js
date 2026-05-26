import { ChartRoom } from "./chartroom.js";
const chart = new ChartRoom()

chart.on('join', (user)=>{
    console.log(`${user} joined`)
})

chart.on('sendMessage', (user,msg)=>{
    console.log(`${user}: ${msg}`)
})

chart.on('leave',(user)=>{
    console.log(`${user} left`)
})

chart.join('Sub')
chart.join('Mon')
chart.sendMessage('Sub', 'I am king')
chart.sendMessage('Mon', 'I am queen')
chart.leave('Sub')
chart.leave('Mon')