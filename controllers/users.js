const passport = require('passport')

// GET signup - function to render signup form
function getSignup (req, res, next) {
    res.render('signup', { message: req.flash('signupMessage')})
}

// POST signup - function to authenticate users and redirect based on data
function postSignup (req, res, next) {
    let signupStrategy = passport.authenticate('local-signup', { // naming convention from passport.js
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
    })

    return signupStrategy(req, res, next)
}

// GET login - function to render login form
function getLogin (req, res, next) {
    res.render('login', { message: req.flash('loginMessage')})
}

// POST login - function to handle login form when submitted
function postLogin (req, res, next) {
    let loginProperty = passport.authenticate('local-login', { // naming convention from passport.js
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
    })

    return loginProperty(req, res, next)
}

// GET logout - function for a user to logout and redirect to home page
function getLogout (req, res, next) {
    req.logout()
    res.redirect('/')
}

module.exports = {
    getSignup: getSignup,
    postSignup: postSignup,
    getLogin: getLogin,
    postLogin: postLogin,
    getLogout: getLogout
}
