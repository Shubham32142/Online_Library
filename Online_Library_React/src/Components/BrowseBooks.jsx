import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Browse Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (Genre: {book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
