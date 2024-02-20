const Models = require('../models');  //I am interested in only User model

module.exports = (Models) => {
    class UserService {

        constructor(sequelize){
            Models(sequelize);
    
            this.client = sequelize;
            this.models = sequelize.models;
        }
    
        getUser(){
            return 'UserService: Getting a user from DB';
        }
    }
    
    return UserService;
}

