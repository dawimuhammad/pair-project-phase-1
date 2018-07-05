'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinations',
    [
      {
        name: 'Kota Tua',
        price: 100000,
        city: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monumen Nasional',
        price: 50000,
        city: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taman Safari Nasional Bogor',
        price: 200000,
        city: 'Bogor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kebun Raya Bogor',
        price: 75000,
        city: 'Bogor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taman Hutan Raya Bandung',
        price: 50000,
        city: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Destinations', null, {});
  }
};
