// This file will have the functionality to initially seed our database
const mongoose = require('./models/topic')
const seeds = require('./seedData')

const Topic = mongoose.model('Topic')

mongoose.Promise = Promise

// Function to clear out database and seed with seedData.json
Topic.remove({}).then(_ => {
    console.log('Dropped the DB')
    // Topic.collection.insert(seeds).then(seededEntries => {
    //     console.log(seededEntries)
    // })
    // .then(_ => process.exit())
    /* Courtesy of Hammad */
    Topic.create(seeds).then(_ => process.exit())
})
