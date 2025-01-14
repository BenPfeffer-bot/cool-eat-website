import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">Your Logo</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to Our Store</h1>
          <p>Discover our unique collection</p>
          <button className="cta-button">Shop Now</button>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {/* Product cards will go here */}
            <div className="product-card">
              <div className="product-image"></div>
              <h3>Product 1</h3>
              <p>Description of the product</p>
              <button>Add to Cart</button>
            </div>
            {/* Repeat for more products */}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
