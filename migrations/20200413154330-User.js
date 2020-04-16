'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false
        }
      });
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('users');
    
  }
};
