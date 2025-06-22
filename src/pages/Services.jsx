import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 mt-5">
      {/* Header */}
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="fw-bold mb-3" data-aos="fade-up">Our Services</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            We offer a comprehensive range of solutions designed to help your business thrive in the digital landscape.
          </p>
        </Col>
      </Row>

      {/* Web Development */}
      <Row className="align-items-center mb-5 py-5">
        <Col lg={6} data-aos="fade-right">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Web Development" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6} data-aos="fade-left">
          <h2 className="fw-bold mb-3">Web Development</h2>
          <p className="mb-4">
            Our web development team creates custom, responsive websites and web applications that deliver exceptional user experiences. 
            We combine cutting-edge technologies with best practices to build solutions that are not only visually appealing but also 
            performant and secure.
          </p>
          <h5 className="fw-bold mb-2">Technologies we use:</h5>
          <ul className="mb-4">
            <li>Frontend: React, Angular, Vue.js</li>
            <li>Backend: Node.js, Django, Laravel</li>
            <li>Databases: MongoDB, PostgreSQL, MySQL</li>
            <li>CMS: WordPress, Drupal, Contentful</li>
          </ul>
          <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
        </Col>
      </Row>

      {/* Mobile App Development */}
      <Row className="align-items-center mb-5 py-5 bg-light rounded">
        <Col lg={6} className="order-lg-2" data-aos="fade-left">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Mobile App Development" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6} className="order-lg-1" data-aos="fade-right">
          <h2 className="fw-bold mb-3">Mobile App Development</h2>
          <p className="mb-4">
            We develop native and cross-platform mobile applications that provide seamless experiences across all devices. 
            Our mobile solutions are designed to be intuitive, fast, and reliable, helping you engage with your customers 
            wherever they are.
          </p>
          <h5 className="fw-bold mb-2">Our mobile expertise includes:</h5>
          <ul className="mb-4">
            <li>iOS development with Swift</li>
            <li>Android development with Kotlin</li>
            <li>Cross-platform development with React Native and Flutter</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>App Store optimization and deployment</li>
          </ul>
          <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
        </Col>
      </Row>

      {/* UI/UX Design */}
      <Row className="align-items-center mb-5 py-5">
        <Col lg={6} data-aos="fade-right">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="UI/UX Design" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6} data-aos="fade-left">
          <h2 className="fw-bold mb-3">UI/UX Design</h2>
          <p className="mb-4">
            Our design team creates beautiful, intuitive interfaces that enhance user satisfaction and engagement. 
            We follow a user-centered design approach, conducting research and testing to ensure that our designs 
            not only look great but also solve real user problems.
          </p>
          <h5 className="fw-bold mb-2">Our design services include:</h5>
          <ul className="mb-4">
            <li>User research and persona development</li>
            <li>Wireframing and prototyping</li>
            <li>Visual design and branding</li>
            <li>Interaction design</li>
            <li>Usability testing</li>
          </ul>
          <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
        </Col>
      </Row>

      {/* Consulting */}
      <Row className="align-items-center mb-5 py-5 bg-light rounded">
        <Col lg={6} className="order-lg-2" data-aos="fade-left">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Consulting Services" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6} className="order-lg-1" data-aos="fade-right">
          <h2 className="fw-bold mb-3">Digital Consulting</h2>
          <p className="mb-4">
            Our consulting services help businesses navigate the complex digital landscape. We provide strategic guidance 
            on technology selection, digital transformation, and process optimization to help you achieve your business goals.
          </p>
          <h5 className="fw-bold mb-2">Our consulting expertise includes:</h5>
          <ul className="mb-4">
            <li>Digital transformation strategy</li>
            <li>Technology stack assessment and recommendations</li>
            <li>Process optimization and automation</li>
            <li>IT infrastructure planning</li>
            <li>Data analytics and business intelligence</li>
          </ul>
          <Button 
            variant="primary" 
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center py-5 mt-4">
        <Col lg={10} className="text-center bg-primary text-white p-5 rounded shadow" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
          <p className="lead mb-4">
            Contact us today to discuss your requirements and get a customized solution for your business.
          </p>
          <Button 
            variant="light" 
            size="lg" 
            className="text-primary fw-bold"
            onClick={() => navigate('/contact')}
          >
            Contact Us Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
