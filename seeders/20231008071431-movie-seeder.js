'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addMovies = [
      {
        title: "Movie 1",
        url: "https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
        image: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Movie 2",
        url: "https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
        image: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Movie 3",
        url: "https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
        image: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Movies', addMovies, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {})
  }
};
