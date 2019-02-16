
// This file is handling user signup and login data - storing said data, hashing passwords and validating data at login
const LocalStrategy     = require('passport-local').Strategy
const User              = require('../db/models/user')

module.exports = function(passport) {

    // Here we are 'serializing' user data (translating data into a format for storage) and attaching to a session
    // to check if a user is still 'using a session' we deserialize the user.id to verify it matches our database info
    passport.serializeUser(function(user, callback) {
        callback(null, user.id)
    })

    passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user)
        })
    })

    // This is the signup strategy
    // 3 arguments: 1. & 2. user info to be hashed, 3. tell strategy to send request object to callback for further use
    passport.use('local-signup', new LocalStrategy({ // local-signup is naming convention for POST signup
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {
        // Checking for user email
        User.findOne({ 'local.email': email }, function(err, user) {
            if (err) return callback(err)
            // If user already exists in database
            if (user) {
                return callback(null, false, req.flash('signupMessage', 'Email Already In Use'))
            } else {
                // If no email in database, create new user
                let newUser             = new User()
                newUser.local.email     = email
                newUser.local.password  = newUser.encrypt(password)
                // Save new user
                newUser.save(function(err) {
                    if (err) throw err
                    return callback(null, newUser)
                })  
            }
        })
    }))

    passport.use('local-login', new LocalStrategy({ // same naming convention as above
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, callback) {
        // Check for user email
        User.findOne({ 'local.email': email }, function(err, user) {
        if (err) {
            return callback(err)
        // If user is not found        
        }   
        if(!user) {
            return callback(null, false, req.flash('loginMessage', 'User Was Not Found'))
        }
        if(!user.validPassword(password)) {
            return callback(null, false, req.flash('loginMessage', 'Password Incorrect, Try Again'))
        }
        return callback(null, user) 
        })    
    }))
}
