const express           = require('express')
const mongoose          = require('../db/connection')
const topicsController   = require('../controllers/topics')
const staticsController = require('../controllers/static');

// Gets the model from our db connection, for queries and manipulating data
const Topic = mongoose.model('Topic')

// Here, we invoke express' router method to obtain an instance of an express router
// then we will configure (using setter methods) for handling routes
const router = express.Router()

router.route('/')
    .get(staticsController.home)

router.route('/topics')
    .get(topicsController.getTopics)

module.exports = router
