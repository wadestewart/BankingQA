
// This file is handling user signup and login data - storing said data, hashing passwords and validating data at login
const LocalStrategy     = require('passport-local').Strategy
const User              = require('../db/models/user')

// This is the signup strategy
// 3 arguments: 1. & 2. user info to be hashed, 3. tell strategy to send request object to callback for further use
module.exports = function(passport) {
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {
        // Checking for user email
        User.findOne({ 'local-email': email }, function(err, user) {
            if (err) return callback(err)
            // If user already exists in database
            if (user) {
                return callback(null, false, req.flash('signupMessage', 'Email already in use!'))
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
}
