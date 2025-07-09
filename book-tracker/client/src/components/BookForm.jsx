import { useState, useEffect } from 'react';

function BookForm({ onSubmit, editingBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('unread');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    if (editingBook) {
      onSubmit(editingBook.id, { title, author, status });
    } else {
      onSubmit({ title, author, status });
    }
    setTitle('');
    setAuthor('');
    setStatus('unread');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="unread">Unread</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <button type="submit">{editingBook ? 'Update' : 'Add'} Book</button>
    </form>
  );
}

export default BookForm;
