const mongoose = require("mongoose");

const ItemCacheSchema = new mongoose.Schema({
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
    expires: 60,
  },
});

module.exports = mongoose.model(
  "ItemCache",
  ItemCacheSchema
);
