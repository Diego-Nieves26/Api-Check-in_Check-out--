const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "naruto22",
  port: 5432,
  database: "ejercicio-1",
});

module.exports = { db, DataTypes };
