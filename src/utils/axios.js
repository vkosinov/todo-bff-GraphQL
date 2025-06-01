const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

module.exports = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
});
