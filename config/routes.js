const express           = require('express')
const mongoose          = require('../db/connection')
const parser            = require('body-parser')
const methodOverride    = require('method-override')
const passport          = require('passport')
const usersController   = require('../controllers/users')
const topicsController  = require('../controllers/topics')
const staticsController = require('../controllers/static');

// Gets the model from our db connection, for queries and manipulating data
const Topic = mongoose.model('Topic')

// Here, we invoke express' router method to obtain an instance of an express router
// then we will configure (using setter methods) for handling routes
const router = express.Router()

// Route for the static home page
router.route('/')
    .get(staticsController.home)

// Route to signup page
router.route('/signup')
    .get(usersController.getSignup)
    .post(usersController.postSignup)

// Route to login page
router.route('/login')
    .get(usersController.getLogin)
    .post(usersController.postLogin)

// Route for logout
router.route('/logout')
    .get(usersController.getLogout)

// Route to the Topics list in the Q&A Forum and to POST a question
router.route('/topics')
    .get(topicsController.getTopics)
    .post(topicsController.postTopic)

// Route to an individual Topic and to edit or delete a topic
router.route('/topics/:title')
    .get(topicsController.findOneTopic)
    .put(topicsController.updateTopic)
    .delete(topicsController.removeTopic)

// Route to get Subtopics list in the Q&A forum and to POST a question
router.route('/topics/:title/subtopics')
    .get(topicsController.getSubtopics)

// Route to an individual Subtopic
// router.route('/subtopics/:_id')
//     .get(topicsController.findOneSubtopic)

module.exports = router
