import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p className="mb-4">
              We are a leading company providing innovative solutions to businesses worldwide.
              Our mission is to help our clients achieve their goals through technology.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Web Development</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Mobile Apps</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">UI/UX Design</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Consulting</Link>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
