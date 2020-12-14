const quotes = require("./quotes");

let randMsg = quotes[Math.floor(Math.random() * quotes.length)];

console.log('Quote:\n' +randMsg.text + ' - ' + randMsg.author);