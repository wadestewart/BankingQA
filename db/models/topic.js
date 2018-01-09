// Import mongoose connection file into the schema
const mongoose = require('../connection')

const subTopicSchema = new mongoose.Schema({
    name: String,
    detail: String
})

// Define the 'key: value' pairs of the schema for the topics to be pulled from the database
const topicSchema = new mongoose.Schema({
    title: String,
    description: String,
    subtopic: [subTopicSchema]
})

// Build a model from the schema, and attach it to the mongoose instance
// This is how we query and manipulate data in the db
const Topic = mongoose.model('Topic', topicSchema)


// Give this file the ability to be imported into other files
module.exports = Topic
