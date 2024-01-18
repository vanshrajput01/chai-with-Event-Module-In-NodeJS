// Event Module in Node.js

// Require event module

const { log } = require("console");
const EventEmitter  = require("events");

// Create object of EventEmitter class

const event = new EventEmitter();

// Create own event

let subscribeMessage = (message) =>{
    console.log(`Thanks For Subcribing ${message}`);

}

event.addListener("subscribe",subscribeMessage);

event.emit("subscribe","My Channel!!");




