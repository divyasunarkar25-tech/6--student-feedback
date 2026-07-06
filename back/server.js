const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

const route = require("./routes/route");

app.use(cors());
app.use(express.json());

connectDB();
// Feedback Routesac
app.use("/api", route);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});