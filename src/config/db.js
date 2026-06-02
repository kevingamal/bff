const mongoose = require("mongoose");

async function connectDB() {
  try {
    const mongoUri =
      process.env.MONGO_URI ||
      "mongodb://localhost:27017/stock_bff";

    await mongoose.connect(mongoUri);

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error conectando MongoDB:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
