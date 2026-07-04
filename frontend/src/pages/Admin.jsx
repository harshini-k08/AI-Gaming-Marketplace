import { useState } from "react";
import api from "../api/api";
import "./Admin.css";

function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    rating: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/games", formData);

      alert(response.data.message);

      setFormData({
        title: "",
        category: "",
        price: "",
        rating: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add game!");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">

        <h1>Add New Game</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Game Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Game Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit">
            Add Game
          </button>

        </form>

      </div>
    </div>
  );
}

export default Admin;