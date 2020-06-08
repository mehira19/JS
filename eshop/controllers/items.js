const Items = require('../models/items').model;


const getAllItems = (req, res) => {
    Items.find()
        .then(allItems => res.status(200).json(allItems))
        .catch(error => res.status(400).json(error));
}

const createItem = (req, res) => {
    let newItem = {
        ...req.body
    }
    Items.create(newItem)
        .then(item => res.status(201).json(item))
        .catch(error => res.status(400).json(error));
}

const getItem = (req, res) => {
    Items.findById(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(error => res.status(400).json(error));
}

const updateItem = (req, res) => {
    let updatedItem = {
        ...req.body
    };
    Items.findByIdAndUpdate(req.params.id, updatedItem, {
            new: true
        })
        .then(item => res.status(200).json(item))
        .catch(error => res.status(400).json(error));
}

const deleteItem = (req, res) => {
    Items.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).end())
        .catch(error => res.status(400).json(error));
}


module.exports.getAllItems = getAllItems;
module.exports.createItem = createItem;
module.exports.getItem = getItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;