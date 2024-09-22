import { useEffect, useState } from "react";
import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "./Components/bookSlice.js";

function App() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const books = useSelector((state) => state.books);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/books");
        const data = await response.json();
        console.log(data);
        dispatch(setBooks(data));
        const uniqueCategories = [...new Set(data.map((book) => book.genre))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchBooks();
  }, [dispatch]);

  //Welcome Message
  useEffect(() => {
    function welcomeMessage() {
      const name = prompt("What is your name?", "Guest");
      alert(`Welcome, ${name}!`);
    }

    welcomeMessage();
  }, []);
  return (
    <>
      <Header />
      <Outlet context={{ books, categories }} />
    </>
  );
}

export default App;
