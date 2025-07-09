import { useEffect, useState } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await axios.get('/api/books');
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    const res = await axios.post('/api/books', book);
    setBooks([...books, res.data]);
  };

  const updateBook = async (id, updates) => {
    const res = await axios.put(`/api/books/${id}`, updates);
    setBooks(books.map(b => (b.id === id ? res.data : b)));
    setEditingBook(null);
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 Book Tracker</h1>
      <BookForm onSubmit={editingBook ? updateBook : addBook} editingBook={editingBook} />
      <BookList books={books} onEdit={setEditingBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
