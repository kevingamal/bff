const mongoose = require("mongoose");

const LocationCacheSchema = new mongoose.Schema({
  cacheKey: {
    type: String,
    required: true,
    unique: true,
  },

  data: {
    type: Object,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});

module.exports = mongoose.model(
  "LocationCache",
  LocationCacheSchema
);