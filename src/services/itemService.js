const axios = require("axios");
const ItemCache = require("../models/ItemCache");

const SPRING_API_URL = process.env.SPRING_API_URL || "http://localhost:8080";

function buildCacheKey(queryParams = {}) {
  return `items:${JSON.stringify(queryParams)}`;
}

async function getItems(queryParams = {}) {
  const cacheKey = buildCacheKey(queryParams);

  const cached = await ItemCache.findOne({ cacheKey });

  if (cached) {
    return cached.data;
  }

  const response = await axios.get(`${SPRING_API_URL}/items`, {
    params: queryParams,
  });

  await ItemCache.create({
    cacheKey,
    data: response.data,
  });

  return response.data;
}

module.exports = {
  getItems,
};