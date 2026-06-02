const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`BFF corriendo en http://localhost:${PORT}`);
  });
}

startServer();
