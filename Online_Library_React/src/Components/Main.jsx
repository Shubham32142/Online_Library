import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Categories from "./Categories";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  const books = useSelector((state) => state.books);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      const filteredByCategory = books.filter(
        (book) => book.genre && book.genre.includes(selectedCategory)
      );
      setFilteredBooks(filteredByCategory);
    } else {
      setFilteredBooks(books);
    }
  }, [books, selectedCategory]);

  function handleSearch(searchTerm) {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }

  function filterByCategory(category) {
    setSelectedCategory(category);
    navigate(`/books/category/${category}`);
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      <Categories
        categories={[...new Set(books.flatMap((book) => book.genre))]}
        onCategorySelect={filterByCategory}
      />
      <div className="books">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id} className="books1">
              <img src={book.cover_image} alt={book.title} />
              <h2>Name: {book.title}</h2>
            </Link>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </>
  );
}

export default Main;
