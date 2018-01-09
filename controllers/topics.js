const mongoose = require('../db/connection')
const Topic = require('../db/models/topic')

// GET - function to retrieve data from db, then render the query
function getTopics(req, res) {
    Topic
    .find({})
    .then((topics) => {
        res.render('index', { topics })
    })
}

// GET - function to find a requested individual topic
function findOneTopic(req, res) {
    Topic
    .findOne({ title: req.params.title })
    .then(topic => {
        res.render('topics', { topic })
    })
}

// GET - function to find a requested individual subtopic
function findOneSubtopic(req, res) {
    Topic
    .findOne({ "title": req.params.title, "subtopic.name": req.params.name })
    .then(subtopic => {
        res.render('subtopics', { subtopic })
    })
}

//POST - function to POST a question on a Topic
function postTopic(req, res) {
    Topic
    .create(req.body.topic)
    .then(topic => {
        res.redirect(`/topics/${topic.title}`)
    })
}

//POST - function to POST a question on a Subtopic

//PUT - function to edit an existing question
function updateTopic(req, res) {
    Topic
    .findOneAndUpdate({ title: req.params.title }, req.body.topic, { new: true})
    .then(topic => {
        res.redirect(`/topics/${topic.title}`)
    })
}

//DELETE - function to remove a question
function removeTopic(req, res) {
    Topic
    .findOneAndRemove({ title: req.params.title })
    .then(() => {
        res.redirect('/topics')
    })
}

module.exports = {
    getTopics: getTopics,
    findOneTopic: findOneTopic,
    postTopic: postTopic,
    updateTopic: updateTopic,
    removeTopic: removeTopic,
    findOneSubtopic: findOneSubtopic
}
