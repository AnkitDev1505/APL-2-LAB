require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

let users = []; // Simulated DB

// Register
app.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = { username: req.body.username, password: hashedPassword };
  users.push(user);
  res.status(201).json({ message: 'User registered' });
});

// Login
app.post('/login', async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});

// Middleware to check JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(5000, () => console.log('Auth server running on http://localhost:5000'));
