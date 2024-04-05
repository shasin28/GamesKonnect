const express = require("express");
const cors = require("cors");
const connectDB = require('./config/database');
const authRoutes = require("./routes/auth");

const app = express();
// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);
app.use("/", (req, res) => {
  return res.send("HELLO");
});
// Start the server
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running`);
});
