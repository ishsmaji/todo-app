const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todo");

// Mount the todo API routes
app.use("/api", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Swagger setup
const { swaggerUi, swaggerSpec } = require('./config/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
