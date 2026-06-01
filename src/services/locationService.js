const axios = require("axios");

const SPRING_API_URL = process.env.SPRING_API_URL || "http://localhost:8080";

async function getLocations(queryParams = {}) {
  const response = await axios.get(`${SPRING_API_URL}/locations`, {
    params: queryParams,
  });

  return response.data;
}

module.exports = {
  getLocations,
};
