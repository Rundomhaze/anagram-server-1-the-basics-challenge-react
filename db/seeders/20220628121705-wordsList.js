'use strict';
const readFile = require('../../readFiles.js')

const allWords = readFile()

module.exports = {

  async up(queryInterface) {
    await queryInterface.bulkInsert('Words', allWords.map((word) => ({
      content: word,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
