import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <div className="logo">Le Casier Français</div>
            <div className="nav-links">
              <Link to="/">Accueil</Link>
              <Link to="/about">Qui sommes-nous</Link>
              <Link to="/products">Produits</Link>
              <Link to="/news">Actualités</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📞 03 20 96 76 02</p>
              <p>✉️ contact@lecasierfrancais.fr</p>
            </div>
            <div className="footer-section">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                <a href="#instagram">Instagram</a>
                <a href="#facebook">Facebook</a>
                <a href="#linkedin">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
