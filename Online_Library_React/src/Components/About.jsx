import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/books");
  }

  return (
    <div className="about-container">
      <h1 className="about-title">About Our Library</h1>
      <p className="about-text">
        Welcome to our Online Library System! We aim to provide a diverse
        collection of books for readers of all ages.
      </p>
      <p className="about-text">
        Our mission is to make reading accessible and enjoyable for everyone,
        anywhere, at any time.
      </p>
      <h3 className="about-subtitle">Why Choose Us?</h3>
      <ul className="about-list">
        <li>Vast collection of books</li>
        <li>User-friendly interface</li>
        <li>Regular updates with new titles</li>
        <li>Completely free to use</li>
      </ul>

      <button className="back-button" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
}

export default About;
