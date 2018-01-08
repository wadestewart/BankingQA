const mongoose = require('../db/connection')
const Topic = require('../db/models/topic')

// GET - function to retrieve data from db, then render the query
function getTopics(req, res) {
    Topic
    .find({})
    .then((topics) => {
        res.render('index.hbs', { topics })
    })
}

module.exports = {
    getTopics: getTopics
}
