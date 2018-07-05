'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
    },
    password: DataTypes.STRING,
    isLogin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false },
    salt: DataTypes.STRING,
    createdAt : new Date(),
    updatedAt : new Date(),
  }, {})

  User.beforeCreate(function(user, options) {
      const saltRounds = 10;

      // generate salt & hashed pass
      var salt = bcrypt.genSaltSync(saltRounds);
      var hash = bcrypt.hashSync(user.password, salt);

      // console.log(salt)
      // console.log(hash)

      user.salt = salt
      user.password = hash
  })

  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
