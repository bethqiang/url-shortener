const Sequelize = require('sequelize');

const databaseURI = process.env.DATABASE_URL || 'postgres://localhost:5432/small-ify';
const db = new Sequelize(databaseURI, {
  logging: false
});

const Link = db.define('link', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shortUrl: {
    type: Sequelize.STRING
  }
});

module.exports = { Link };
