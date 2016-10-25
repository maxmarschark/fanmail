const SubmissionDAO = require('./DAO');


class SubmissionController {
  static index(req, res) {
    SubmissionDAO.all()
      .then(users => res.send(users))
      .catch(err => res.send(err));
  }

  // static show(req, res) {
  //   SubmissionDAO.find(['id', req.params.id])
  //    .then(user => res.send(new User(user)))
  //    .catch(err => res.send(err));
  // }

  static create(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    SubmissionDAO.create({ name, email })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400);
      console.error(err);
    });
  }
}

module.exports = SubmissionController;
