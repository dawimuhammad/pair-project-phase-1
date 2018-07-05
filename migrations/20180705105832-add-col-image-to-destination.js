'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Destinations', 'image', {
          type: Sequelize.STRING
      });
  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.removeColumn('Destinations', 'image');
  }
};
