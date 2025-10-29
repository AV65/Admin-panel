import axios from 'axios';
import { useState } from 'react';
import "./Addflower.css";
import upload from '../assets/upload.jpg';

const Addflower = () => {

  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    Title: '',
    Category: '',
    Price: '',
    Description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const data = new FormData();
    data.append('Image', image);
    data.append('Title', formData.Title);
    data.append('Category', formData.Category);
    data.append('Price', formData.Price);
    data.append('Description', formData.Description);

    try {
      const response = await axios.post(
        'https://flower-website-backend-two.onrender.com/api/flowers', 
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      alert("Flower added successfully!");
      console.log(response.data);

      setFormData({
        Title: '',
        Category: '',
        Price: '',
        Description: ''
      });
      setImage(null);

    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      alert("Failed to upload flower");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className="imageinput">
          <input
            type="file"
            id="imageUpload"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <label htmlFor="imageUpload" className="upload-label">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="Selected"
              className="upload-icon"
              style={{ objectFit: 'cover' }}
            />
          </label>
        </div>

        <div className="datainput">
          <p className="name">Name</p>
          <input
            type="text"
            className="namein"
            name="Title"
            onChange={handleChange}
            value={formData.Title}
            required
          />

          <label className="category">Category:</label>
          <select
            className="categoryin"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="dry-flowers">dry-flowers</option>
            <option value="live-plants">live-plants</option>
            <option value="aroma-candles">aroma-candles</option>
            <option value="fresheners">fresheners</option>
            <option value="Fresh-flowers">Fresh-flowers</option>
          </select>

          <p className="price">Price</p>
          <input
            type="number"
            className="pricein"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            required
          />

          <p className="description">Description</p>
          <input
            type="text"
            className="descriptionin"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading..." : "Submit"}
        </button>

      </form>
    </div>
  );
};

export default Addflower;
