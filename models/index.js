const Sequelize = require('sequelize');

const databaseURI = process.env.DATABASE_URL || 'postgres://localhost:5432/small-ify';
const db = new Sequelize(databaseURI, {
  logging: false
});

const Link = db.define('link', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  shortUrl: {
    type: Sequelize.STRING,
    unique: true
  }
}, {
  hooks: {
    beforeCreate(link) {
      const randNum = Math.floor(Math.random() * 9000) + 1000;
      link.shortUrl = `https://small-ify.herokuapp.com/${randNum}`;
    }
  }
});

module.exports = { Link };
