import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 mt-5">
      {/* Header */}
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="fw-bold mb-3" data-aos="fade-up">About Us</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            We're a team of passionate professionals dedicated to delivering exceptional digital solutions.
          </p>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="align-items-center mb-5">
        <Col lg={6} data-aos="fade-right">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Our Team" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6} data-aos="fade-left">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, our company began with a simple mission: to help businesses leverage technology to achieve their goals. 
            What started as a small team of developers has grown into a full-service digital agency with expertise across web development, 
            mobile applications, design, and consulting.
          </p>
          <p className="mb-4">
            Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500 companies, 
            delivering solutions that drive growth and innovation. Our commitment to quality, transparency, and client satisfaction 
            has been the cornerstone of our success.
          </p>
        </Col>
      </Row>

      {/* Our Mission and Vision */}
      <Row className="py-5 bg-light rounded mb-5">
        <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-up">
          <div className="h-100 p-4 border rounded bg-white shadow-sm">
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p>
              To empower businesses through innovative digital solutions that solve real problems, enhance user experiences, 
              and drive measurable results. We strive to be a trusted partner for our clients, providing expertise and support 
              at every step of their digital journey.
            </p>
          </div>
        </Col>
        <Col lg={6} data-aos="fade-up" data-aos-delay="100">
          <div className="h-100 p-4 border rounded bg-white shadow-sm">
            <h3 className="fw-bold mb-3">Our Vision</h3>
            <p>
              To be recognized as a leader in digital innovation, known for our technical excellence, creative solutions, 
              and exceptional client service. We aim to create a positive impact through technology, helping businesses 
              thrive in an increasingly digital world.
            </p>
          </div>
        </Col>
      </Row>

      {/* Our Values */}
      <Row className="mb-5">
        <Col lg={12} className="text-center mb-4" data-aos="fade-up">
          <h2 className="fw-bold">Our Values</h2>
          <p className="lead">The principles that guide everything we do</p>
        </Col>
        
        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-star-fill fs-1"></i>
              </div>
              <Card.Title className="fw-bold">Excellence</Card.Title>
              <Card.Text>
                We are committed to delivering the highest quality in everything we do. 
                We continuously improve our skills and processes to ensure we provide 
                solutions that exceed expectations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-people-fill fs-1"></i>
              </div>
              <Card.Title className="fw-bold">Collaboration</Card.Title>
              <Card.Text>
                We believe in the power of teamwork and partnership. We work closely with 
                our clients and each other, sharing knowledge and combining our strengths 
                to achieve the best results.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-lightbulb-fill fs-1"></i>
              </div>
              <Card.Title className="fw-bold">Innovation</Card.Title>
              <Card.Text>
                We embrace creativity and forward-thinking. We stay at the forefront of 
                technology trends and are not afraid to explore new approaches to solve 
                complex problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Team */}
      <Row className="mb-5">
        <Col lg={12} className="text-center mb-4" data-aos="fade-up">
          <h2 className="fw-bold">Our Leadership Team</h2>
          <p className="lead">Meet the people behind our success</p>
        </Col>
        
        <Col lg={3} md={6} className="mb-4" data-aos="fade-up">
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            <Card.Body className="text-center p-4">
              <Card.Title className="fw-bold">John Doe</Card.Title>
              <p className="text-muted">CEO & Founder</p>
              <p className="small">
                With over 15 years of experience in technology and business management, 
                John leads our company with vision and strategic direction.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            <Card.Body className="text-center p-4">
              <Card.Title className="fw-bold">Jane Smith</Card.Title>
              <p className="text-muted">CTO</p>
              <p className="small">
                Jane brings technical excellence and innovation to our team, with deep expertise 
                in software architecture and emerging technologies.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            <Card.Body className="text-center p-4">
              <Card.Title className="fw-bold">Michael Johnson</Card.Title>
              <p className="text-muted">Creative Director</p>
              <p className="small">
                Michael leads our design team with a passion for creating beautiful, 
                user-centered experiences that delight and engage.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            <Card.Body className="text-center p-4">
              <Card.Title className="fw-bold">Sarah Williams</Card.Title>
              <p className="text-muted">Client Success Manager</p>
              <p className="small">
                Sarah ensures our clients receive exceptional service and support, 
                building strong relationships and driving project success.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <Row className="py-5 bg-light rounded mb-5">
        <Col lg={12} className="text-center mb-4" data-aos="fade-up">
          <h2 className="fw-bold">Why Choose Us</h2>
          <p className="lead">What sets us apart from the competition</p>
        </Col>
        
        <Col md={6} lg={3} className="mb-4" data-aos="fade-up">
          <div className="text-center">
            <div className="mb-3 text-primary">
              <i className="bi bi-award fs-1"></i>
            </div>
            <h4 className="fw-bold">Expertise</h4>
            <p>
              Our team consists of highly skilled professionals with deep expertise in their respective fields.
            </p>
          </div>
        </Col>
        
        <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center">
            <div className="mb-3 text-primary">
              <i className="bi bi-gear fs-1"></i>
            </div>
            <h4 className="fw-bold">Proven Process</h4>
            <p>
              We follow a well-defined methodology that ensures consistent, high-quality results for every project.
            </p>
          </div>
        </Col>
        
        <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center">
            <div className="mb-3 text-primary">
              <i className="bi bi-graph-up fs-1"></i>
            </div>
            <h4 className="fw-bold">Results-Driven</h4>
            <p>
              We focus on delivering solutions that drive real business value and measurable outcomes.
            </p>
          </div>
        </Col>
        
        <Col md={6} lg={3} className="mb-4" data-aos="fade-up" data-aos-delay="300">
          <div className="text-center">
            <div className="mb-3 text-primary">
              <i className="bi bi-headset fs-1"></i>
            </div>
            <h4 className="fw-bold">Dedicated Support</h4>
            <p>
              We provide ongoing support and maintenance to ensure your solutions continue to perform optimally.
            </p>
          </div>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center py-5">
        <Col lg={10} className="text-center bg-primary text-white p-5 rounded shadow" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Ready to Work With Us?</h2>
          <p className="lead mb-4">
            Let's discuss how we can help your business achieve its goals through innovative digital solutions.
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

export default About;
