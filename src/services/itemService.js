const axios = require("axios");

const SPRING_API_URL = process.env.SPRING_API_URL || "http://localhost:8080";

async function getItems(queryParams = {}) {
  const response = await axios.get(`${SPRING_API_URL}/items`, {
    params: queryParams,
  });

  return response.data;
}

module.exports = {
  getItems,
};
