const express = require('express');
const app = express();

app.use(express.json());

// Simulated route with error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

app.listen(3000, () => console.log('Server with error handling running'));
