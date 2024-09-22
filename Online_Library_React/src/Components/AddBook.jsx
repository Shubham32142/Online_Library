import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const [cover_image, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !genre || !description || !cover_image) {
      setError("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      cover_image,
      description,
    };

    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={cover_image}
            onChange={(e) => setCoverImage(e.target.value)}
          />
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
