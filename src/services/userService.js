const axios = require("axios");

const SPRING_API_URL = process.env.SPRING_API_URL || "http://localhost:8080";

async function getUsers(queryParams = {}, authHeader) {
  const response = await axios.get(`${SPRING_API_URL}/users`, {
    params: queryParams,
    headers: {
      Authorization: authHeader,
    },
  });

  return response.data;
}

module.exports = {
  getUsers,
};