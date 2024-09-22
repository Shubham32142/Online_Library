import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import "./BookDetails.css";

function BookDetails() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { books } = useOutletContext();

  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return <p className="error-message">Book not found</p>;
  }

  function handleBack() {
    navigate("/books");
  }

  return (
    <div className="book-details">
      <img className="book-cover" src={book.cover_image} alt={book.title} />
      <h2 className="book-title">Title: {book.title}</h2>
      <h3 className="book-author">Author: {book.author}</h3>
      <h4 className="book-genre">Genre: {book.genre}</h4>
      <h4 className="book-Publication">Released on: {book.publication_year}</h4>
      <p className="book-description">
        <b>Description:</b> {book.description}
      </p>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default BookDetails;
