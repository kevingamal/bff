const express = require("express");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

const itemRoutes = require("./routes/itemRoutes");
const locationRoutes = require("./routes/locationRoutes");
const movementRoutes = require("./routes/movementRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({
    message: "BFF funcionando",
  });
});

app.use("/api/items", itemRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/movements", movementRoutes);
app.use("/api/users", userRoutes);

module.exports = app;