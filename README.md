# Admin-panel

##  Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Author](#author)
- [License](#license)

---

## Overview

A full-stack web application for managing an online flower catalog. Users can upload flower details with images, view all listings, and delete flowers. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React.

---

## Backend api
 [Backend API](https://flower-website-backend-two.onrender.com/api/users/getusers)

---


##  Features

-  Add flowers with image, title, category, price, and description
-  Delete flower listings
-  Upload image files using `multer`
-  RESTful API with structured error handling
-  Responsive frontend with React and custom CSS

---

##  Tech Stack

###  Frontend
- React.js
- Axios
- Custom CSS (`Addflower.css`, `FlowerHome.css`)

###  Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Multer (for image uploads)
- Dotenv

---

##  Frontend Components

### `Addflower.js`
- Allows users to upload a flower's:
  - Name
  - Category
  - Price
  - Description
  - Image (via file input)
- Posts the form data to the backend as `multipart/form-data`

### `FlowerHome.js`
- Fetches and displays all flower entries
- Includes a delete button (red minus icon) for each flower
- Optimized with responsive CSS and image display

---

## 📡 Backend Endpoints

Base URL: `https://flower-website-backend-two.onrender.com`

###  Auth Routes (`/api/users`)
- `POST /signup` – Register new user
- `POST /login` – Log in user
- `GET /getusers` – View all users

###  Flower Routes (`/api/flowers`)
- `GET /` – Fetch all flowers
- `GET /:id` – Get single flower by ID
- `POST /` – Add flower (with image)
- `PATCH /:id` – Update flower (optional image)
- `DELETE /:id` – Delete flower and associated image

---

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AV65/flower-website-backend-two.git 
   cd flower-website-backend-two
   npm install



## Environmental Variables

PORT=5000
MONGO_URI=your-mongodb-connection-string
SECRET=your-jwt-secret


## Author
Name: [Muhammad Farouk]
 Email: [salihiyaha4@gmail.com]
 GitHub: https://github.com/AV65

License
This project is licensed under the MIT License.
    