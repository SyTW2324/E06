import express from "express";

const app = express();

// start the Express server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000...');
});