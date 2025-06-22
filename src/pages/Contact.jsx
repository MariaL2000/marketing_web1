import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Replace with your Django API endpoint
      const response = await axios.post('/api/contact/', formData);
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: response.data.message || 'Message sent successfully!' }
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.response?.data?.message || 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="fw-bold mb-3" data-aos="fade-up">Contact Us</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col lg={8}>
          {status.info.error && (
            <Alert variant="danger" className="mb-4">
              {status.info.msg}
            </Alert>
          )}
          
          {status.submitted && !status.info.error && (
            <Alert variant="success" className="mb-4">
              {status.info.msg}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit} data-aos="fade-up">
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={6} className="mb-3">
                <Form.Group controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-4" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="How can we help you?"
                required
              />
            </Form.Group>
            
            <div className="d-grid">
              <Button 
                variant="primary" 
                type="submit" 
                size="lg"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      
      <Row className="mt-5 pt-4">
        <Col md={4} className="mb-4 mb-md-0" data-aos="fade-up">
          <div className="text-center">
            <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Our Location</h5>
            <p>123 Business Street<br />New York, NY 10001</p>
          </div>
        </Col>
        
        <Col md={4} className="mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center">
            <i className="bi bi-envelope fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Email Us</h5>
            <p>info@example.com<br />support@example.com</p>
          </div>
        </Col>
        
        <Col md={4} data-aos="fade-up" data-aos-delay="200">
          <div className="text-center">
            <i className="bi bi-telephone fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Call Us</h5>
            <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
