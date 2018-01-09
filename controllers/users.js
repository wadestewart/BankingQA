const passport = require('passport')

// GET signup - function to handle new user signup
function getSignup (req, res, next) {
    res.render('signup', { message: request.flash('signupMessage')})
}

//POST signup - function to authenticate users and redirect based on data
function postSignup (req, res, next) {
    let signupStrategy = passport.authenticate('local-signup', { // naming convention from passport.js
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
    })
}

module.exports = {
    getSignup: getSignup,
    postSignup: postSignup
}
