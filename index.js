// Node is JS runtime meaning we can run code without the browser

// Here we'll be writing a server. What is a server?
// - A server is an application that runs and listens
// - Open a connection and start listeing
// - It listens for requests of people that want to connect to it

// We'll use express for writing our webserver
// - We'll get it from npm (node package manager)

// Bring in express, basically an import statement
const express = require('express')
// Express basically comes in as a big func that we can then run
const app = express()

// A major thign we need to do is have the app start listening
// We give it the port we want and then the func to do when its started listening
app.listen(3000, () => console.log('listening at 3000'))

// Now we're going to use express to host our static files
app.use(express.static('public'))


// What is our server going to do?
// 1. Serve web pages
// - In our case, index.html
// 2. 