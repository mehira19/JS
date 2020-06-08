const Users = require('../models/users').model;

const getAllUsers = (req, res) => {
    Users.find()
        .then(allUsers => res.status(200).json(allUsers))
        .catch(error => res.status(400).json(error));
}

const createUser = (req, res) => {
    let newUser = {
        ...req.body
    }
    console.log(newUser)
    Users.create(newUser)
        .then(user => res.status(201).json(user))
        .catch(error => res.status(400).json(error));
}

const getUser = (req, res) => {
    Users.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error));
}

const updateUser = (req, res) => {
    let updateduser = {
        ...req.body
    };
    users.findByIdAndUpdate(req.params.id, updateduser, {
            new: true
        })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error));
}

const deleteUser = (req, res) => {
    Users.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).end())
        .catch(error => res.status(400).json(error));
}

module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;