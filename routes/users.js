var express = require('express');

var router = express.Router();

const UserService = require('../services/UserService')
var UserController = require('../controllers/UserController');

const usersData = [
  {id:1, firstName: 'Ralph', lastName: 'Woods'},
  {id:2, firstName: 'Ronnie', lastName: 'Moore'},
  {id:3, firstName: 'Koko', lastName: 'Kennedy'}
]

module.exports = (config) => {
  const userService = new UserService();

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    try{
      const user = userService.getUser();
      res.send(user);
    }catch(err){
      return next(err);
    }
    //res.send('respond with a resource');
    res.json(usersData);
    res.status(200).send();
  });

  /* POST a user as if the app admin is onboarding someone */
  router.post('/', UserController.create)


  return router;
}