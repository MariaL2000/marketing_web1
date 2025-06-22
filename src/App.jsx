import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Coupons from './pages/Coupons';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem('cookiesAccepted') === 'true'
  );

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCookieConsent = (accepted) => {
    setCookiesAccepted(accepted);
    localStorage.setItem('cookiesAccepted', accepted);
  };

  return (
    <Router>
      <NavigationBar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
      
      {!cookiesAccepted && (
        <CookieConsent onConsent={handleCookieConsent} />
      )}
    </Router>
  );
}

export default App;
