const express = require('express');
const app = express();

app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
