const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const itemRoutes = require("./routes/itemRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "BFF funcionando",
  });
});

app.use("/api/items", itemRoutes);
app.use("/api/locations", locationRoutes);

module.exports = app;