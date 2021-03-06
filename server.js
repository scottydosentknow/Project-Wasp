const express = require("express");
const path = require("path");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static file
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Started on port " + PORT));
