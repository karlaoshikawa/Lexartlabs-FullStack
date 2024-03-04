require("dotenv").config();

module.exports = {
  development: {
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: false, // Desativar SSL
    },
  },
  test: {},
  production: {
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: false, // Desativar SSL
    },
  },
};
