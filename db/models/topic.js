// Import mongoose dependency into the model schema
const mongoose = require('mongoose')

// Define the 'key: value' pairs of the schema for the topics to be pulled from the database
const topicSchema = new mongoose.Schema({
    title: string,
    description: string
})

// Build a model from the schema, and attach it to the mongoose instance
// This is how we query and manipulate data in the db
mongoose.model('Topic', topicSchema)

// Give this file the ability to be imported into other files
module.exports = mongoose
