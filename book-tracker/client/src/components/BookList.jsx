function BookList({ books, onEdit, onDelete }) {
  if (!books.length) return <p>No books yet.</p>;

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <span>
            <strong>{book.title}</strong> by {book.author} — {book.status}
          </span>
          <div>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
