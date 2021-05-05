// mock User model with save method. username is expected to be in
// save=val1,count=val2 format where save determines what calling
// .save on an instance does, and count determines the result of
// calling the static method find or findOne will return
class User {
    constructor(obj) {
      Object.assign(this, obj);
      this.meta = User.parseName(obj.username);
    }
    save(cb) {
      if(this.meta.save === 'success') {
        cb(null, this);
      } else {
        cb('error', null); 
      }
    }
  }
  
  // break up username into save and count values
  User.parseName = function(username) {
    const s = '{' + username + '}';
    // console.log('parsing', s);
    return JSON.parse(s);
  };
  
  User.find = function(q, cb) {
    const meta = User.parseName(q.username);
    if(meta.count === 0) {
      cb(null, [] ) ;
    } else {
      cb(null, Array(meta.count), meta.count) ;
    }
  };
  
  User.findOne = function(q, cb) {
    const meta = User.parseName(q.username);
    if(meta.count === 0) {
      cb(null, undefined ) ;
    } else {
      // if found, password hash will match with success-test
      cb(null, {username: q.username, password: '$2a$10$lU0JvxkriRZXWsaTodjoXepBD7RVtF8v481pDH9H19uuirGkHDZdK'}) ;
    }
  };
  
  module.exports = {
    User: User
  };