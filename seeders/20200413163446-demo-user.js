'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('users', [
        {
          name: 'John Doe',
          age: 33,
          country: 'USA',
          email: 'email1@mail.com'
        },
        {
          name: 'John',
          age: 34,
          country: 'USA',
          email: 'email2@mail.com'
        },
        {
          name: 'Doe',
          age: 36,
          country: 'USA',
          email: 'email3@mail.com'
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
