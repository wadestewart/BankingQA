// This file will have the functionality to initially seed our database
const mongoose = require('./connection')
const seeds = require('./seedData')

const Topic = mongoose.model('Topic')

mongoose.Promise = Promise

// Function to clear out database and seed with seedData.json
Topic.remove({}).then(_ => {
    console.log('Dropped the DB')
    Topic.collection.insert(seeds).then(seededEntries => {
        console.log(seededEntries)
        mongoose.connect.close()
    })
})
