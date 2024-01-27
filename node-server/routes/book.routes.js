const express = require('express');
const app = express();

const bookRoute = express.Router();
let Book = require('../models/book');

bookRoute.route('/books').post((req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

bookRoute.route('/books').get((req, res, next) => {
  Book.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

bookRoute.route('/books/:id').get((req, res, next) => {
  Book.findByPk(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

bookRoute.route('/books/:id').put((req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
      console.log('Book update successful');
    }
  });
});

bookRoute.route('/books/:id').delete((req, res, next) => {
  Book.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        message: data,
      });
    }
  });
});

module.exports = bookRoute;
