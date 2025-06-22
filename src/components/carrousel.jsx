import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="header-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1680382578871-32ce66f9ae25?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption className="text-start">
          <h1 className="display-3 fw-bold">Innovative Solutions</h1>
          <p className="lead fs-4">We deliver cutting-edge solutions for your business</p>
          <Button 
            variant="primary" 
            size="lg" 
            className="me-2"
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
          <Button 
            variant="outline-light" 
            size="lg"
            onClick={() => navigate('/services')}
          >
            Our Services
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption className="text-start">
          <h1 className="display-3 fw-bold">Expert Team</h1>
          <p className="lead fs-4">Our professionals are ready to help you succeed</p>
          <Button 
            variant="primary" 
            size="lg" 
            className="me-2"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
          <Button 
            variant="outline-light" 
            size="lg"
            onClick={() => navigate('/about')}
          >
            About Us
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption className="text-start">
          <h1 className="display-3 fw-bold">Results Driven</h1>
          <p className="lead fs-4">We focus on delivering measurable outcomes</p>
          <Button 
            variant="primary" 
            size="lg" 
            className="me-2"
            onClick={() => navigate('/contact')}
          >
            Start Now
          </Button>
          <Button 
            variant="outline-light" 
            size="lg"
            onClick={() => navigate('/portfolio')}
          >
            Our Work
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
