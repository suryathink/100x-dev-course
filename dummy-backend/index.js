// app.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Define a route to return the data
app.get("/notifications", (req, res) => {
  const data = {
    network: 7,
    jobs: 3,
    messaging: 3,
    notifications: 6,
  };
  res.send({ data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
