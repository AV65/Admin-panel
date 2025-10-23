import React, { useState } from "react";
import axios from "axios";
import "./Addflower.css";

const AddFlower = () => {
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Image) {
      alert("Please upload an image!");
      return;
    }

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Category", Category);
    formData.append("Price", Price);
    formData.append("Description", Description);
    formData.append("Image", Image);

    try {
      setUploading(true);
      const res = await axios.post("https://flower-website-backend-two.onrender.com/api/flowers", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Flower added successfully!");
      console.log(res.data);
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("❌ Upload error:", error.response?.data || error.message);
      alert("Error uploading flower: " + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="datainput">
      <h2>Add Flower 🌸</h2>

      {/* Name Input */}
      <label className="name">Name:</label>
      <input
        className="namein"
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Category Dropdown */}
      <label className="category">Category:</label>
      <select
        className="categoryin"
        value={Category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">-- Select Category --</option>
        <option value="dry-flowers">dry-flowers</option>
        <option value="live-plants">live-plants</option>
        <option value="aroma-candles">aroma-candles</option>
        <option value="fresheners">fresheners</option>
        <option value="Fresh-flowers">Fresh-flowers</option>
      </select>

      {/* Price Input */}
      <label className="price">Price (₦):</label>
      <input
        className="pricein"
        type="number"
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      {/* Description Input */}
      <label className="description">Description:</label>
      <textarea
        className="descriptionin"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Image Input */}
      <label>Image:</label>
      <input
        className="upload-icon"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

      {/* Submit Button */}
      <button type="submit" className="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Add Flower"}
      </button>
    </form>
  );
};

export default AddFlower;
