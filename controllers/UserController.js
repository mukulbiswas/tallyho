const { User } = require('../models/user');

//Create a new user
const create = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  } ;
  User.create(user)
    .then(data=>{res.send(data);})
    .catch(err=>{res.status(500).send({message: err.message || "Save error has occurred."})}); 
};

// Retrieve all Tutorials from the database.
const findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
const findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
const update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
const deleteOne = (req, res) => {
  
};

// Delete all Tutorials from the database.
const deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

module.exports = { create };

