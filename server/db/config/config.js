require('dotenv').config();

const { env } = process;

const development = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DEV_NAME,
  host: env.HOST,
  port: parseInt(env.DB_PORT, 10),
  dialect: env.DB_DIALECT,
};
const test = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DEV_NAME,
  host: env.HOST,
  port: parseInt(env.DB_PORT, 10),
  dialect: env.DB_DIALECT,
};
const production = {
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_PROD_NAME,
  host: env.HOST,
  port: parseInt(env.DB_PORT, 10),
  dialect: env.DB_DIALECT,
};

module.exports = { development, test, production };
