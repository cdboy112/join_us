// app.js
const express = require('express');
const db = require('./db');
const { body, validationResult } = require('express-validator');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM users');
    res.render('home', { count: rows[0].count, error: null });
  } catch (err) {
    next(err);
  }
});

app.post('/register',
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const [rows] = await db.query('SELECT COUNT(*) AS count FROM users');
      return res.render('home', { count: rows[0].count, error: errors.array()[0].msg });
    }

    try {
      await db.query('INSERT INTO users (email) VALUES (?)', [req.body.email]);
      res.redirect('/');
    } catch (err) {
      const [rows] = await db.query('SELECT COUNT(*) AS count FROM users');
      res.render('home', { count: rows[0].count, error: err.message });
    }
  }
);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal server error');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
