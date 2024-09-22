import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSuccessMessage(
      "Thank you for your message! We'll get back to you soon."
    );
    setFormData({ name: "", email: "", message: "" });
  }

  function handleBack() {
    navigate("/books");
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        Have any questions or feedback? Feel free to reach out, and we’ll get
        back to you as soon as possible.
      </p>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <button className="back-button" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
}

export default Contact;
