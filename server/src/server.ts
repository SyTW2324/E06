import express from "express";

const app = express();

// start the Express server
app.listen(5200, () => {
  console.log('Server running at http://localhost:5200...');
});