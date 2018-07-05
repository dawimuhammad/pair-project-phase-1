'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guides',
    [
      {
        name: 'Ari Supriatna',
        kuota: 10,
        schedule: '09:00',
        DestinationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Haddawi',
        kuota: 8,
        schedule: '15:00',
        DestinationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wisnu',
        kuota: 9,
        schedule: '09:00',
        DestinationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Made',
        kuota: 11,
        schedule: '09:00',
        DestinationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bli Made',
        kuota: 12,
        schedule: '15:00',
        DestinationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Guides', null, {});
  }
};
