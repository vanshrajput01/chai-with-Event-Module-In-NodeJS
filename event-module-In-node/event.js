// Event Module in Node.js

// Require event module

const { log } = require("console");
const EventEmitter  = require("events");

// Create object of EventEmitter class

const event = new EventEmitter();

// Create own event

event.addListener("subscribe",(channelName)=>{
    console.log(`Thanks for Subscribing to ${channelName} `);
})


event.emit("subscribe","My channel!!")

