const User = require("../models/user.model.js");
const validation = require("./validation.js");

exports.create = (req, res) => {
  const result = validation.creationValidation(req.body);

  if (result.passed) {
    const userIns = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      birthday: req.body.birthday,
      married: req.body.married
    });

    userIns
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.msg
        });
      });
  } else {
    res.staus(422).send({
      message: result.msg
    });
  }
};

exports.listAll = (req, res) => {
  User.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.msg
      });
    });
};
