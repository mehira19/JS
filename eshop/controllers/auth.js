const passwordHash = require("password-hash");

const Users = require("../models/users").model;

const signup = (req, res) => {
  let newUser = {
    ...req.body,
  };
  newUser.password = passwordHash.generate(newUser.password);
  console.log(newUser);
  Users.create(newUser)
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json(error));
};

const login = (req, res) => {
  const { login, password } = { ...req.body };
  Users.findOne({ login: login })
    .then((user) => {
      if (user.password == passwordHash.generate(password)) {
        delete user.password;
        return res.status(200).json(user);
      } else {
        return res.status(400).json({
          error: true,
          message: "Mot de passe incorrect",
        });
      }
    })
    .catch(() =>
      res.status(400).json({
        error: true,
        message: "Login incorrect ou inexistant",
      })
    );
};

module.exports.signup = signup;
module.exports.login = login;
