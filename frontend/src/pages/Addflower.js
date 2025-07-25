import { useState } from 'react';
import axios from 'axios';

const AddFlower = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Description', description);
    formData.append('Price', price);
    formData.append('Category', category);
    formData.append('Image', image); // important!

    try {
      const res = await axios.post('https://flower-website-backend-two.onrender.com/api/flowers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Flower added successfully!');
      console.log(res.data);
    } catch (err) {
      console.error('Upload error:', err.response?.data || err.message);
      alert('Failed to upload flower');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
      <button type="submit">Upload Flower</button>
    </form>
  );
};

export default AddFlower;
