const db = require('./db');
const newSignup = require('./sqlProvider');
const User = require('../models/User');

class SubmissionDAO {
  static create({ name, email }) {
    return db.one(newSignup.send, [name, email])
             .then((row) => {
               new User(row);
             });
  }
}

module.exports = SubmissionDAO;
