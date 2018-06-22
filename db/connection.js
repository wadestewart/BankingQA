// This file will use mongoose to link our Mongo database to our app

// Importing mongoose into the connection file a middleware to MongoDb
const mongoose = require('mongoose')

// Replacing mongoose (deprecated) promise library with ES6 promise library
mongoose.Promise = Promise

// Set the URI for connecting to local MongoDb
const mongoUri = 'mongodb://localhost/bankingqa'
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MLAB_URL, { useMongoClient: true })
    .then(connection => console.log(`Connection established to '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection Failed!', connectionError))
  } else {
    mongoose.connect(mongoUri)
    .then(connection => console.log(`Connection established to '${connection.db.databaseName}'`))
    .catch(connectionError => console.log('Connection Failed!', connectionError))
  }

// Connect to database, with imported mongoose instance
// mongoose
//     .connect(mongoUri, {useMongoClient: true})
//     .then(connection => console.log(`Connection established to '${connection.db.databaseName}'`))
//     .catch(connectionError => console.log('Connection Failed!', connectionError))
// Mongoose instance now has a configured connection to our local db, in addition to it's model configuration

// Exporting for use in other files
module.exports = mongoose
