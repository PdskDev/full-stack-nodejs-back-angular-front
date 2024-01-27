module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING(255),
    },
    price: {
      type: Sequelize.FLOAT,
    },
    title: {
      type: Sequelize.STRING(255),
    },
  });

  return Book;
};
