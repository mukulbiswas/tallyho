//var Op = require('sequelize');
const {User} = require('../models/user');

const login = (req, res, next) => {
  const {email, password} = req.body;
  try {
    return res.status(200).send({message: 'The user has logged in successfully.'});
  } catch(err) {
    next(err);
  }
};

const register = (req, res, next) => {
  const {email, password, name, phone} = req.body;
  try {
    //If the user exist, then return an error 422
    //const user = User.findOne({where: {[Op.or]: [ {phone}, {email} ]}});
    const user = false;
    if(user) {
      return res.status(422)
      .send({message: 'User with that email or phone already exists'});
    }
    //...else, create the user
    return res.status(201).send({message: 'Account created successfully'});
  } catch(e) {
    console.log(e);
    return res.status(500)
    .send(
      {message: 'Could not perform operation at this time, kindly try again later.'});
  }
}

module.exports = { login, register };

