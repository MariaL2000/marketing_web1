import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [offerIndex, setOfferIndex] = useState(0);
  const phoneNumber = "+1 (555) 123-4567"; // Replace with your actual phone number

  // Array of special offers to display in the carousel
  const specialOffers = [
    "🔥 20% OFF your first project! Use code: WELCOME20",
    "⚡ Free UI/UX consultation with any web development package",
    "🎁 Refer a friend and both get 10% off your next project",
    "🚀 Limited time offer: 30% discount on all digital marketing services",
    "💻 Mobile app development special: Get iOS & Android apps for the price of one!"
  ];

  // Auto-rotate through offers
  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % specialOffers.length);
    }, 5000); // Change offer every 5 seconds

    return () => clearInterval(interval);
  }, [specialOffers.length]);

  return (
    <div className="navbar-wrapper">
      {/* Main Navigation Bar */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/logo.png"
              alt="Company Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/coupons">Special Offers</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Button
              variant="primary"
              className="ms-lg-3"
              onClick={() => navigate('/contact')}
            >
              Get a Quote
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Offers Ticker Bar - Directly below main navbar */}
      <div className="offers-ticker-container">
        <div className="offers-ticker-wrapper">
          {/* Phone Button - Left side */}
          <Button 
            variant="outline-light" 
            size="sm" 
            className="ticker-phone-button"
            href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
          >
            <i className="bi bi-telephone-fill me-1"></i> {phoneNumber}
          </Button>
          
          {/* Ticker Content - Center */}
          <div className="offers-ticker-content">
            {specialOffers.map((offer, index) => (
              <span 
                key={index} 
                className={`ticker-item ${index === offerIndex ? 'active' : ''}`}
              >
                {offer}
              </span>
            ))}
          </div>
          
          {/* View Offers Button - Right side */}
          <Button 
            variant="light" 
            size="sm" 
            className="ticker-button"
            onClick={() => navigate('/coupons')}
          >
            View Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
