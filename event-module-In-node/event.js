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

event.emit("subscribe","other Channel!!");

// remove Event

event.removeListener("subscribe",subscribeMessage);

event.emit("subscribe","My Channel!!");

// create Example of Event Module in Node.JS

const greetingMessage = (message) =>{
    console.log(`Hello, ${message}!!`);

}

event.addListener("loggedIn",greetingMessage);

event.emit("loggedIn","Jack");

event.emit("loggedIn","Alice");








