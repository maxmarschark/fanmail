const db = require('./db');
const newSignup = require('./sqlProvider');

class SubmissionDAO {
  static create({ name, email }) {
    return db.one(newSignup.send, [name, email]);
  }
}

module.exports = SubmissionDAO;
