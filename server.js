import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = 4000;
const JWT_SECRET = 'supersecretkey'; // Cambia esto en producción

app.use(cors());
app.use(bodyParser.json());

// Simulación de base de datos en memoria
const users = [];

// Registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered' });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware para verificar JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Ruta protegida
app.get('/me', authenticateToken, (req, res) => {
  res.json({ username: req.user.username });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
