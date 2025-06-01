const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

module.exports = axios.create({
  baseURL: process.env.NODE_ENV,
  timeout: 5000,
});
