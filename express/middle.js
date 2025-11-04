const express = require('express');
const app = express();

// Custom middleware
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next(); // Move to next handler
});

app.get('/', (req, res) => {
  res.send('Middleware example!');
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
