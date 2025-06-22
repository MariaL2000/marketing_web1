import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Coupons = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });

  const coupons = [
    {
      id: 1,
      title: "20% OFF First Project",
      code: "WELCOME20",
      description: "Get 20% off your first project with us. Valid for new clients only.",
      expiry: "December 31, 2023",
      discount: "20%",
      category: "New Clients"
    },
    {
      id: 2,
      title: "Free UI/UX Consultation",
      code: "UXDESIGN",
      description: "Redeem this coupon for a free 1-hour UI/UX consultation session with our design experts.",
      expiry: "November 30, 2023",
      discount: "Free Consultation",
      category: "Design Services"
    },
    {
      id: 3,
      title: "Web Development Bundle",
      code: "WEBDEV15",
      description: "15% discount on our web development packages when you include maintenance plan.",
      expiry: "January 15, 2024",
      discount: "15%",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Mobile App Special",
      code: "MOBILEAPP25",
      description: "25% off mobile app development for cross-platform projects (iOS & Android).",
      expiry: "February 28, 2024",
      discount: "25%",
      category: "Mobile Development"
    },
    {
      id: 5,
      title: "Referral Bonus",
      code: "REFER10",
      description: "10% discount for you and the friend you refer to our services.",
      expiry: "No Expiry",
      discount: "10%",
      category: "Referral Program"
    },
    {
      id: 6,
      title: "Holiday Special",
      code: "HOLIDAY2023",
      description: "Special holiday discount of 30% on all digital marketing services.",
      expiry: "December 25, 2023",
      discount: "30%",
      category: "Digital Marketing"
    }
  ];

  const handleClaimCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to submit email and coupon
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: `Success! The coupon code ${selectedCoupon.code} has been sent to ${email}.`
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setShowModal(false);
        setEmail('');
        setSubmitResult({ success: false, message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <Container className="py-5 mt-5 position-relative">
      {/* Background with blurred company logo */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{
          backgroundImage: 'url(/company-logo.png)', // Replace with your actual logo path
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.07,
          filter: 'blur(8px)',
          zIndex: -1
        }}
      ></div>

      {/* Header */}
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="fw-bold mb-3" data-aos="fade-up">Special Offers & Coupons</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Exclusive discounts and special offers for our valued customers. Claim your coupon today!
          </p>
        </Col>
      </Row>

      {/* Coupons Grid */}
      <Row>
        {coupons.map((coupon) => (
          <Col lg={4} md={6} className="mb-4" key={coupon.id} data-aos="fade-up" data-aos-delay={(coupon.id - 1) * 100}>
            <Card className="h-100 shadow coupon-card">
              <div className="coupon-badge">{coupon.discount}</div>
              <Card.Body className="p-4">
                <Card.Title className="fw-bold mb-3">{coupon.title}</Card.Title>
                <div className="coupon-code mb-3 p-2 bg-light text-center rounded">
                  <span className="fw-bold">{coupon.code}</span>
                </div>
                <Card.Text>{coupon.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted">Expires: {coupon.expiry}</small>
                  <span className="badge bg-secondary">{coupon.category}</span>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-0 p-4 pt-0">
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={() => handleClaimCoupon(coupon)}
                >
                  Claim Coupon
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center py-5 mt-4">
        <Col lg={10} className="text-center bg-primary text-white p-5 rounded shadow" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Ready to Use Your Coupon?</h2>
          <p className="lead mb-4">
            Contact us today to discuss your project and apply your discount.
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

      {/* Coupon Claim Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Claim Your Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCoupon && (
            <>
              <div className="text-center mb-4">
                <h4>{selectedCoupon.title}</h4>
                <div className="coupon-code-large my-3 p-3 bg-light text-center rounded">
                  <span className="fw-bold fs-4">{selectedCoupon.code}</span>
                </div>
                <p className="text-muted">Expires: {selectedCoupon.expiry}</p>
              </div>

              {submitResult.success ? (
                <div className="alert alert-success">{submitResult.message}</div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter your email to receive this coupon:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll send the coupon code to this email address.
                    </Form.Text>
                  </Form.Group>
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Coupon to My Email'}
                  </Button>
                </Form>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Coupons;
