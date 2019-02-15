// This file will have the functionality to initially seed our database
const { mongoose, Topic } = require('./models/topic')
const seeds = require('./seedData')

// const Topic = require('./models/topic')

// mongoose.Promise = Promise

// Function to clear out database and seed with seedData.json
Topic.deleteMany({})
    .then(_ => {
        console.log('Dropped the DB')
        return Topic.collection.insertMany(seeds)
    })
    .then(_ => {
        process.exit()
    })
    
    // Topic.collection.insert(seeds).then(seededEntries => {
    //     console.log(seededEntries)
    // })
    // .then(_ => process.exit())
    /* Courtesy of Hammad */
    // Topic.create(seeds).then(_ => process.exit())
