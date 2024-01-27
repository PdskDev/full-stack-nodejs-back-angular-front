var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyPaser = require('body-paser');

var corsOptions = {
  origin: 'http://localhost:8081',
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyPaser.json());
app.use(
  bodyPaser.urlencoded({
    extended: false,
  })
);
app.use(cors);

//Strict directory path
app.use(express.static(path.join(__dirname, 'dist/angular-crud-tutorial')));

const db = require('./models/index');
db.sequelize.sync();

const bookRoutes = require('./routes/book.routes');

//API routes
app.use('/api', bookRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});

//404 handler
app.use((req, res, next) => {
  next(createError(404));
});

//Base route
app.get('/', (req, res, next) => {
  res.send('Invalid endpoint');
});

app.get('/', (req, res, next) => {
  res.send('Invalid endpoint');
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/angular-crud-tutorial/index.html'));
});

//error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
