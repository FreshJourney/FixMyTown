const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRoutes = require("./routes/User.routes");

app.use(express.json());

app.use("/user", UserRoutes);

mongoose
  .connect("mongodb://localhost:27017/FixMyTown")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit the server at: http://localhost:${PORT}`);
});
