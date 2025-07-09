const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In‑memory data store (reset on server restart)
let books = [
  { id: uuidv4(), title: 'The Pragmatic Programmer', author: 'Andrew Hunt', status: 'reading' }
];

// CRUD Endpoints
app.get('/api/books', (req, res) => res.json(books));

app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
});

app.post('/api/books', (req, res) => {
  const { title, author, status } = req.body;
  const newBook = { id: uuidv4(), title, author, status };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const idx = books.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Book not found' });
  books[idx] = { ...books[idx], ...req.body };
  res.json(books[idx]);
});

app.delete('/api/books/:id', (req, res) => {
  const idx = books.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Book not found' });
  const removed = books.splice(idx, 1);
  res.json(removed[0]);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
