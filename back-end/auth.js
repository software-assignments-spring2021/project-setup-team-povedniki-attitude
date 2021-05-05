const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('./db');

const User = mongoose.model('User');

function register(email, name, password, errorCallback, successCallback) {
    if (password.length < 8) {
        console.log('username or password too short');
        errorCallback( {message: 'USERNAME PASSWORD TOO SHORT'} );
    }
    else {
        User.findOne( {username: email}, (err, result, count) => {
            if (result) {
                console.log('username already exists');
                errorCallback( {message: 'USERNAME ALREADY EXISTS'} );
            }
            else {
                bcrypt.hash(password, 10, function(err, hash) {
                    new User({
                        username: email,
                        name: name,
                        password: hash
                    }).save( function(err, user, count) {
                        if (err) {
                            console.log('document save error');
                            console.log(err);
                            errorCallback( {message: 'DOCUMENT SAVE ERROR'} );
                        }
                        else {
                            successCallback(user);
                        }
                    })
                })
            }
        });
    }
}

module.exports = {
    register: register
};