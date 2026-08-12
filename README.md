# Collector's Hub

A responsive **React + TypeScript** web application built for the **React Web Developer Internship Assignment**. The platform allows collectors to explore marketplace listings, browse community posts, and manage their personal collection through a clean and intuitive interface.

---

## Live Demo

* **Live App:** collectors-hub-two.vercel.app
* **Demo Video:** https://drive.google.com/file/d/1bntkh_0ZitDVSgeyX5JfW8RhYJaiqFq9/view?usp=drive_link

---

## Objective

Build a responsive web application for a **Collector's Hub** where users can:

* Discover collectible items through a marketplace
* Browse community posts
* Manage their personal collection

The project focuses on reusable React components, responsive UI design, maintainable code structure, and thoughtful handling of real-world product scenarios.

---

# Features

## 1. Marketplace

Users can browse collectible items available for sale.

### Listing Information

* Product image
* Title
* Category
* Condition
* Price
* Seller name
* Location

### Implemented Features

* Browse listings
* Search by title
* Filter by category
* Filter by condition
* Sort by price
* Sort by newest
* View product details
* Add item to Collection
* Add item to Wishlist

---

## 2. Community Feed

Users can discover collectibles shared by the community.

### Post Information

* User information
* Product image
* Caption
* Number of likes
* Number of comments

### Implemented Features

* Browse feed
* Search posts
* Filter by category
* Like a post
* Save a post
* Open post details

---

## 3. My Collection

Three default collections are provided:

* **Owned**
* **Wishlist**
* **Selling**

### Item Information

* Image
* Title
* Category
* Date Added
* Estimated Value (mock)

### Implemented Features

* View collection
* Search items
* Filter items
* Sort items
* Remove item
* Move item between collections

---

# Real-World UX Handling

The application handles several practical scenarios:

* Prevents duplicate items within the same collection
* Shows feedback when an item already exists
* Displays meaningful empty states
* Shows helpful no-results messages
* Handles missing images with fallback placeholders
* Displays loading indicators
* Shows not-found states for invalid product/post routes
* Provides intuitive feedback using toast notifications

---

# Bonus Features Implemented

* 🌙 Dark mode
* 💾 Local persistence using **LocalStorage**
* 🖼️ Lazy loading images
* ⌨️ Debounced search
* 🧱 Skeleton loader component
* 🔔 Toast notifications
* 📱 Fully responsive layout

---

# Tech Stack

* **React**
* **TypeScript**
* **React Router DOM**
* **React Toastify**
* **Vite**
* **Context API** for shared state management

---

# Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── PostCard.tsx
│   └── SkeletonCard.tsx
├── context/
│   └── CollectionContext.tsx
├── data/
│   ├── products.ts
│   └── posts.ts
├── pages/
│   ├── Marketplace.tsx
│   ├── ProductDetails.tsx
│   ├── Community.tsx
│   ├── PostDetails.tsx
│   └── Collection.tsx
├── types/
└── App.tsx
```

---

# Setup Instructions

## Prerequisites

* Node.js (v18 or above recommended)
* npm

## Installation

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

---

# Assumptions Made

* Authentication is not required.
* Backend APIs are not required for this assignment.
* Marketplace and community data are mocked locally.
* Estimated values are sample values for demonstration.
* Collection persistence is browser-based using LocalStorage.

---

# Libraries Used

| Library          | Purpose                       |
| ---------------- | ----------------------------- |
| react-router-dom | Client-side routing           |
| react-toastify   | Toast notifications           |
| vite             | Development and build tooling |

---

# Responsive Design

The application is optimized for:

* Mobile devices
* Tablets
* Desktop browsers

Layouts adapt without horizontal scrolling or broken components.

---

# Accessibility & UX Notes

* Semantic HTML structure
* Keyboard-accessible buttons and links
* Clear visual hierarchy
* Consistent spacing and typography
* High-contrast dark mode option
* Helpful empty and error states

---

# What I Focused On

* Reusable component architecture
* Scalable folder structure
* Clean TypeScript code
* Responsive UI
* State sharing with Context API
* Edge-case handling
* Production-style user experience

---

# Future Improvements

* Backend integration
* User authentication
* Infinite scrolling
* Grid/List view toggle
* Optimistic UI updates
* Advanced filtering
* Image upload support

---

# Author

**Iqra Tahreem**

React Web Developer Internship Assignment
