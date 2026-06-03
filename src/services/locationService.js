const axios = require("axios");
const LocationCache = require("../models/LocationCache");

const SPRING_API_URL = process.env.SPRING_API_URL || "http://localhost:8080";

function buildCacheKey(queryParams = {}) {
  return `locations:${JSON.stringify(queryParams)}`;
}

async function getLocations(queryParams = {}) {
  const cacheKey = buildCacheKey(queryParams);

  const cached = await LocationCache.findOne({ cacheKey });

  if (cached) {
    return cached.data;
  }

  const response = await axios.get(`${SPRING_API_URL}/locations`, {
    params: queryParams,
  });

  await LocationCache.create({
    cacheKey,
    data: response.data,
  });

  return response.data;
}

module.exports = {
  getLocations,
};