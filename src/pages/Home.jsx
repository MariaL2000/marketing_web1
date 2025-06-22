import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ControlledCarousel from '../components/carrousel';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Function to toggle video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Locations where we work
  const locations = [
    { name: "New York", address: "123 Broadway, New York, NY 10001" },
    { name: "Los Angeles", address: "456 Hollywood Blvd, Los Angeles, CA 90028" },
    { name: "Chicago", address: "789 Michigan Ave, Chicago, IL 60611" },
    { name: "Miami", address: "101 Ocean Drive, Miami, FL 33139" },
    { name: "Seattle", address: "202 Pike Street, Seattle, WA 98101" },
    { name: "Austin", address: "303 Congress Ave, Austin, TX 78701" }
  ];

  return (
    <>
      {/* Header Carousel */}
      <ControlledCarousel />
      
      {/* Animated Headline */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h2
              className="display-4 fw-bold mb-4"
              data-aos="fade-up"
            >
              Transforming Ideas Into Exceptional Digital Experiences
            </h2>
            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We combine innovation, expertise, and dedication to deliver solutions that exceed expectations.
            </p>
            <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
              <Badge bg="primary" className="me-2 p-2">Web Development</Badge>
              <Badge bg="success" className="me-2 p-2">Mobile Apps</Badge>
              <Badge bg="info" className="me-2 p-2">UI/UX Design</Badge>
              <Badge bg="warning" className="me-2 p-2">E-commerce</Badge>
              <Badge bg="danger" className="p-2">Digital Marketing</Badge>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Stats Counter Section */}
      <div className="bg-dark text-white py-4">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-3 mb-md-0" data-aos="fade-up">
              <h2 className="fw-bold display-5">250+</h2>
              <p className="mb-0">Projects Completed</p>
            </Col>
            <Col md={3} sm={6} className="mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="100">
              <h2 className="fw-bold display-5">120+</h2>
              <p className="mb-0">Happy Clients</p>
            </Col>
            <Col md={3} sm={6} className="mb-3 mb-md-0" data-aos="fade-up" data-aos-delay="200">
              <h2 className="fw-bold display-5">15+</h2>
              <p className="mb-0">Years Experience</p>
            </Col>
            <Col md={3} sm={6} data-aos="fade-up" data-aos-delay="300">
              <h2 className="fw-bold display-5">30+</h2>
              <p className="mb-0">Expert Team Members</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Services Section with Images */}
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="fw-bold mb-3" data-aos="fade-up">Our Premium Services</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              Tailored solutions to help your business thrive in the digital landscape
            </p>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Web Development"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <h3 className="fw-bold mb-3">Web Development</h3>
            <p className="mb-3">
              Our team of experts develops custom solutions tailored to your specific needs.
              We leverage the latest technologies to ensure your business stays ahead of the competition.
            </p>
            <ul className="mb-4">
              <li>Responsive website design</li>
              <li>E-commerce platforms</li>
              <li>Content management systems</li>
              <li>Progressive web applications</li>
            </ul>
            <div className="d-flex flex-wrap mb-4">
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">React</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Angular</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Vue.js</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Node.js</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">WordPress</Badge>
            </div>
            <Button variant="outline-primary" onClick={() => navigate('/services')}>
              Learn More
            </Button>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} className="order-lg-2" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Mobile App Development"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} className="order-lg-1" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Mobile App Development</h3>
            <p className="mb-3">
              Create powerful, feature-rich mobile applications that engage users and drive business growth.
              Our mobile solutions are designed for optimal performance across all devices.
            </p>
            <ul className="mb-4">
              <li>Native iOS and Android apps</li>
              <li>Cross-platform development</li>
              <li>App store optimization</li>
              <li>Ongoing maintenance and support</li>
            </ul>
            <div className="d-flex flex-wrap mb-4">
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Swift</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Kotlin</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">React Native</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Flutter</Badge>
            </div>
            <Button variant="outline-primary" onClick={() => navigate('/services')}>
              Learn More
            </Button>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="UI/UX Design"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} data-aos="fade-left">
            <h3 className="fw-bold mb-3">UI/UX Design</h3>
            <p className="mb-3">
              Create intuitive, engaging user experiences that delight your customers and keep them coming back.
              Our design process focuses on usability, accessibility, and visual appeal.
            </p>
            <ul className="mb-4">
              <li>User research and testing</li>
              <li>Wireframing and prototyping</li>
              <li>Visual design and branding</li>
              <li>Interaction design</li>
            </ul>
            <div className="d-flex flex-wrap mb-4">
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Figma</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Adobe XD</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Sketch</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">InVision</Badge>
            </div>
            <Button variant="outline-primary" onClick={() => navigate('/services')}>
              Learn More
            </Button>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} className="order-lg-1" data-aos="fade-right">
            <h3 className="fw-bold mb-3">Digital Marketing</h3>
            <p className="mb-3">
              Increase your online visibility and reach your target audience with our comprehensive 
              digital marketing strategies tailored to your business goals.
            </p>
            <ul className="mb-4">
              <li>Search engine optimization (SEO)</li>
              <li>Pay-per-click advertising (PPC)</li>
              <li>Social media marketing</li>
              <li>Content marketing and email campaigns</li>
            </ul>
            <div className="d-flex flex-wrap mb-4">
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Google Ads</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Facebook Ads</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">Instagram</Badge>
              <Badge bg="light" text="dark" className="me-2 mb-2 p-2">SEO</Badge>
            </div>
            <Button variant="outline-primary" onClick={() => navigate('/services')}>
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
      
      {/* Video Section */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-3" data-aos="fade-up">See Our Work in Action</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                Watch how we transform ideas into reality
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10} data-aos="zoom-in">
              <div className="position-relative video-container rounded overflow-hidden shadow-lg">
                <video 
                  ref={videoRef}
                  className="w-100" 
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                >
                  {/* Replace with your actual video file */}
                  <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center video-overlay"
                  onClick={toggleVideo}
                  style={{ cursor: 'pointer', backgroundColor: 'rgba(0,0,0,0.3)' }}
                >
                  {!isPlaying && (
                    <div className="video-play-button">
                      <i className="bi bi-play-circle-fill text-white" style={{ fontSize: '4rem' }}></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center mt-3">
                <Button 
                  variant={isPlaying ? "danger" : "primary"} 
                  onClick={toggleVideo}
                  className="mt-3"
                >
                  {isPlaying ? (
                    <><i className="bi bi-pause-fill me-2"></i>Pause Video</>
                  ) : (
                    <><i className="bi bi-play-fill me-2"></i>Play Video</>
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Why Choose Us Section with Varied Card Backgrounds */}
      <div className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-3" data-aos="fade-up">Why Choose Us</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                We're committed to excellence in everything we do
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 border-0 shadow-sm bg-primary text-white">
                <Card.Body className="p-4 text-center">
                <div className="mb-3">
                    <i className="bi bi-award fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Experience</Card.Title>
                  <Card.Text>
                    With over 10 years of industry experience, we've successfully delivered
                    hundreds of projects for clients across various sectors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm bg-success text-white">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-people fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Expert Team</Card.Title>
                  <Card.Text>
                    Our team consists of highly skilled professionals who are passionate
                    about delivering exceptional results for our clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm bg-info text-white">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-graph-up fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Results-Driven</Card.Title>
                  <Card.Text>
                    We focus on delivering measurable outcomes that help your business
                    grow and succeed in today's competitive market.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-4">
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm bg-warning">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-lightning fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Fast Delivery</Card.Title>
                  <Card.Text>
                    We understand the importance of time-to-market and work efficiently
                    to deliver your projects on schedule without compromising quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm bg-danger text-white">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-shield-check fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Reliable Support</Card.Title>
                  <Card.Text>
                    Our commitment doesn't end at delivery. We provide ongoing support
                    to ensure your solutions continue to perform optimally.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="h-100 border-0 shadow-sm bg-secondary text-white">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-stars fs-1"></i>
                  </div>
                  <Card.Title className="fw-bold">Innovation</Card.Title>
                  <Card.Text>
                    We stay at the forefront of technology trends to bring innovative
                    solutions that give your business a competitive edge.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-3" data-aos="fade-up">What Our Clients Say</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <Card.Text className="mb-4 fst-italic">
                    "Working with this team was a game-changer for our business. Their expertise
                    and dedication helped us launch our new platform ahead of schedule."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                        alt="Client" 
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Sarah Johnson</h6>
                      <small className="text-muted">CEO, TechStart Inc.</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <Card.Text className="mb-4 fst-italic">
                    "The mobile app they developed for us has received outstanding feedback from our users.
                    Their attention to detail and user experience expertise is unmatched."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                        alt="Client" 
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Michael Rodriguez</h6>
                      <small className="text-muted">Product Manager, AppWave</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <Card.Text className="mb-4 fst-italic">
                    "Their digital marketing strategies transformed our online presence. We've seen a 200%
                    increase in qualified leads since implementing their recommendations."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                        alt="Client" 
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Emily Chen</h6>
                      <small className="text-muted">Marketing Director, GrowthFirm</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Locations Map Section */}
      <div 
        className="py-5 position-relative"
        style={{
          backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=United+States&zoom=4&size=1600x600&key=YOUR_API_KEY)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.7 }}></div>
        <Container className="position-relative">
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center text-white">
              <h2 className="fw-bold mb-3" data-aos="fade-up">Our Service Locations</h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                We provide services across major cities in the United States
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col lg={5} className="mb-4 mb-lg-0" data-aos="fade-right">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-0">
                  <Tabs defaultActiveKey="all" id="locations-tabs" className="mb-0">
                    <Tab eventKey="all" title="All Locations">
                      <ListGroup variant="flush">
                        {locations.map((location, index) => (
                          <ListGroup.Item key={index} className="py-3">
                            <h5 className="mb-1 fw-bold">{location.name}</h5>
                            <p className="mb-0 text-muted">
                              <i className="bi bi-geo-alt me-2"></i>
                              {location.address}
                            </p>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Tab>
                    <Tab eventKey="east" title="East Coast">
                      <ListGroup variant="flush">
                        <ListGroup.Item className="py-3">
                          <h5 className="mb-1 fw-bold">New York</h5>
                          <p className="mb-0 text-muted">
                            <i className="bi bi-geo-alt me-2"></i>
                            123 Broadway, New York, NY 10001
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item className="py-3">
                          <h5 className="mb-1 fw-bold">Miami</h5>
                          <p className="mb-0 text-muted">
                            <i className="bi bi-geo-alt me-2"></i>
                            101 Ocean Drive, Miami, FL 33139
                          </p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab>
                    <Tab eventKey="west" title="West Coast">
                      <ListGroup variant="flush">
                        <ListGroup.Item className="py-3">
                          <h5 className="mb-1 fw-bold">Los Angeles</h5>
                          <p className="mb-0 text-muted">
                            <i className="bi bi-geo-alt me-2"></i>
                            456 Hollywood Blvd, Los Angeles, CA 90028
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item className="py-3">
                          <h5 className="mb-1 fw-bold">Seattle</h5>
                          <p className="mb-0 text-muted">
                            <i className="bi bi-geo-alt me-2"></i>
                            202 Pike Street, Seattle, WA 98101
                          </p>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={7} className="d-flex align-items-center" data-aos="fade-left">
              <div className="text-white p-4 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <h3 className="fw-bold mb-4">Nationwide Service</h3>
                <p className="lead mb-4">
                  While we have physical offices in these major cities, our team provides services
                  nationwide. No matter where you're located, we can help your business thrive.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="light" onClick={() => navigate('/contact')}>
                    <i className="bi bi-envelope me-2"></i>Contact Us
                  </Button>
                  <Button variant="outline-light" onClick={() => navigate('/about')}>
                    <i className="bi bi-building me-2"></i>About Our Company
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Call to Action */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} data-aos="fade-right">
              <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
              <p className="lead mb-0">
                Let's discuss how we can help your business grow with our tailored digital solutions.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
              <Button 
                variant="light" 
                size="lg" 
                className="me-2 mb-2 mb-md-0"
                onClick={() => navigate('/contact')}
              >
                <i className="bi bi-envelope me-2"></i>Contact Us
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                onClick={() => navigate('/services')}
              >
                <i className="bi bi-arrow-right me-2"></i>Our Services
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;


