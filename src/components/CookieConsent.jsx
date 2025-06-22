import React from 'react';
import { Button } from 'react-bootstrap';

const CookieConsent = ({ onConsent }) => {
  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <h5>Cookie Policy</h5>
          <p>
            We use cookies to enhance your browsing experience, serve personalized ads or content, 
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="cookie-consent-buttons">
            <Button 
              variant="outline-secondary" 
              onClick={() => onConsent(false)}
              className="me-2"
            >
              Decline
            </Button>
            <Button 
              variant="primary" 
              onClick={() => onConsent(true)}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
