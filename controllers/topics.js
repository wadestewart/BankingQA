const mongoose = require('../db/connection')
const Topic = require('../db/models/topic').Topic
const Subtopic = require('../db/models/topic').Subtopic

// GET - function to retrieve Topic data from db, then render the query
function getTopics(req, res) {
    // console.log(req)
    Topic
    .find({})
    .then((topics) => {
        console.log('found topics: ' + topics)
        res.render('index', { topics })
    })
    .catch((err)=> {
        console.log(err)
    })
}

// GET - function to retrieve Subtopic data from db, then render the query
// Hammad helped me extensively find the path to targeting a subdocument
function getSubtopics(req, res) {
    Topic
    .findOne({title: req.params.title})
    .then((topic) => {
        console.log('found topic subtopics: ' + topic.subtopic)
        res.render('subtopics-index', { subtopics: topic.subtopic })
    })
    .catch((err)=> {
        console.log(err)
    })    
}

// GET - function to find a requested individual topic
function findOneTopic(req, res) {
    Topic
    .findOne({ title: req.params.title })
    .then(topic => {
        res.render('topics', { topic })
    })
    .catch((err)=> {
        console.log(err)
    })
}

// GET - function to find a requested individual subtopic
// Holy Smokes - Hammad found the code below to target and render a specific subtopic, it took us 4 hours...
// function findOneSubtopic(req, res) {
//     Topic
//     .findOne({ title: req.params.title })
//     .then(topic => {
//         console.log(topic)
//         let subtopicPredicate = el => el._id = req.params.name
//         let subtopicItem = topic.subtopic.findIndex(subtopicPredicate)
//         res.render('subtopics', {subtopic: topic.subtopic[subtopicItem]})
//     })
//     .catch((err)=> {
//         throw err
//     })
// }

//POST - function to POST a question on a Topic
function postTopic(req, res) {
    Topic
    .create(req.body.topic)
    .then(topic => {
        res.redirect(`/topics/${topic.title}`)
    })
    .catch((err)=> {
        console.log(err)
    })
}

//PUT - function to edit an existing question
function updateTopic(req, res) {
    Topic
    .findOneAndUpdate({ title: req.params.title }, req.body.topic, { new: true})
    .then(topic => {
        res.redirect(`/topics/${topic.title}`)
    })
    .catch((err)=> {
        console.log(err)
    })
}

//DELETE - function to remove a question
function removeTopic(req, res) {
    Topic
    .findOneAndRemove({ title: req.params.title })
    .then(() => {
        res.redirect('/topics')
    })
    .catch((err)=> {
        console.log(err)
    })
}

module.exports = {
    getTopics: getTopics,
    findOneTopic: findOneTopic,
    postTopic: postTopic,
    updateTopic: updateTopic,
    removeTopic: removeTopic,
    getSubtopics: getSubtopics,
}
