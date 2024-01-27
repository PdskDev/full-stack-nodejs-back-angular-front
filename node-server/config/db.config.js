module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'P@ssword01',
  DB: 'nodejs_api_db',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
