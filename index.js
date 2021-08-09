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

const Datastore = require('nedb')

// A major thign we need to do is have the app start listening
// We give it the port we want and then the func to do when its started listening
app.listen(3000, () => console.log('listening at 3000'))

// Now we're going to use express to host our static files
app.use(express.static('public'))

// Setup web server to exect to recieve JSON
app.use(express.json({ limit: '1mb' }))


// What is our server going to do?
// 1. Serve web pages
// - In our case, index.html
// - Host static files
// 2. Save data to db
// 3. Authentication

// index.js is the server
// - Right now all it does is host static files
//  - Right now that static file is index.html
// Clients connect and request that html page
// - html is then sent to the client where it is rendered
// - If the html contains js, it is sent as text and then executed at the client 

const database = new Datastore('database.db')
database.loadDatabase()

// Setting up Routing

// Specifying a POST route
// request contains the info that the client is sneding up
// response allows us to send stuff back to the user
app.post('/api', (request, response) => {
    //console.log(request.body)
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json({
        status: "success",
        latitide: request.body.lat,
        longitude: request.body.long,
        color: request.body.color,
        timestamp: timestamp
    })
})


// Now we need to add a DB for persistence
// - MongoDB is popular
//  - MOngoDB is a document based DB which means files are stored in files similar to JSON documents
// We'll use NE-DB
// - Its a subset of MongoDB's API