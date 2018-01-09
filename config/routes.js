const express           = require('express')
const mongoose          = require('../db/connection')
const topicsController   = require('../controllers/topics')
const staticsController = require('../controllers/static');

// Gets the model from our db connection, for queries and manipulating data
const Topic = mongoose.model('Topic')

// Here, we invoke express' router method to obtain an instance of an express router
// then we will configure (using setter methods) for handling routes
const router = express.Router()

// Route for the static home page
router.route('/')
    .get(staticsController.home)

// Route to the Topics list in the Q&A Forum and to POST a question
router.route('/topics')
    .get(topicsController.getTopics)
    .post(topicsController.postTopic)

// Route to an individual Topic    
router.route('/topics/:title')
    .get(topicsController.findOneTopic)
    .put(topicsController.updateTopic)
    .delete(topicsController.removeTopic)

module.exports = router
