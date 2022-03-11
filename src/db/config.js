const mongoose = require("mongoose");

/**
 * Database setup
 */
const connection = mongoose.connect(
  `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  }
);

module.exports = connection;
