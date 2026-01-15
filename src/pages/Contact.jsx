import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Button, Alert, Row, Col, Container, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaUser, FaPaperPlane } from 'react-icons/fa';
import './Contact.css'; // Create this file for custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      
      setSubmitted(true);
      setErrors({});
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['Holiday St, Gauravaddo, Calangute, Goa 403516'],
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      details: ['+91 98765 43210'],
      link: 'tel:+919876543210'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['info@luxuryliving.com'],
      link: 'mailto:info@luxuryliving.com'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: By Appointment'],
      link: null
    }
  ];

  const subjects = [
    'General Inquiry',
    'Room Booking',
    'Pricing Information',
    'Technical Support',
    'Feedback',
    'Partnership'
  ];

  return (
    <div className="contact-page">
      <Container className="py-5">
        {/* Header Section */}
        

        {submitted && (
          <Alert 
            variant="success" 
            className="fade-in"
            onClose={() => setSubmitted(false)} 
            dismissible
          >
            <Alert.Heading>Message Sent Successfully!</Alert.Heading>
            <p>
              Thank you for contacting us. We've received your message and will get back to you 
              within 24 hours. Your reference number is: <strong>REF-{Date.now().toString().slice(-6)}</strong>
            </p>
          </Alert>
        )}

        {errors.submit && (
          <Alert variant="danger" dismissible onClose={() => setErrors({...errors, submit: ''})}>
            {errors.submit}
          </Alert>
        )}

        <Row className="g-4">
          {/* Contact Information Column */}
          <Col lg={5} className="mb-4">
            <div className="contact-info-section">
              <h3 className="mb-4">Get in Touch</h3>
              <p className="mb-4">
                Have questions about our luxury rooms? Need assistance with booking? 
                Reach out to us through any of the channels below.
              </p>
              
              <div className="contact-cards">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="mb-3 contact-card">
                    <Card.Body>
                      <div className="d-flex align-items-start">
                        <div className="contact-icon">
                          {item.icon}
                        </div>
                        <div className="ms-3">
                          <h5 className="mb-2">{item.title}</h5>
                          {item.details.map((detail, i) => (
                            <p key={i} className="mb-1 small">
                              {detail}
                            </p>
                          ))}
                          {item.link && (
                            <a 
                              href={item.link} 
                              className="btn btn-sm btn-outline-primary mt-2"
                              target={item.link.includes('http') ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                            >
                              {item.title === 'Our Location' ? 'View on Map' : 'Contact Now'}
                            </a>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="social-links mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex gap-3">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                    <a 
                      key={platform}
                      href={`https://${platform}.com`}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form Column */}
          <Col lg={7}>
            <Card className="shadow contact-form-card">
              <Card.Body className="p-4">
                <h3 className="mb-4">Send us a Message</h3>
                
                <Form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaUser className="me-2" />
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="Enter your full name"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          placeholder="+91 98765 43210"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="your.email@example.com"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Your Message </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      Please provide as much detail as possible so we can assist you better.
                    </Form.Text>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Group className="mb-0">
                      <Form.Check 
                        type="checkbox"
                        label="I agree to receive follow-up communications"
                        required
                      />
                    </Form.Group>
                    
                    <Button 
                      variant="primary" 
                      type="submit"
                      disabled={loading}
                      className="px-4 py-2"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {/* Additional Info */}
            
          </Col>
        </Row>

        {/* Map Section (Optional) */}
        <div className="mt-5">
  
  <div className="map-container rounded shadow-lg overflow-hidden">
    <div className="map-wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.4142047083064!2d73.7614404!3d15.5332702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc12be238766b%3A0xec12eed050f9602f!2sClares%20Cove%20Guest%20house!5e1!3m2!1sen!2sin!4v1768374923777!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border: 0}}
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Clares Cove Guest House Location"
        className="google-map"
      />
    </div>
    <div className="map-info p-3 bg-white">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <FaMapMarkerAlt className="text-primary me-2" />
          <strong>Clares Cove Guest House</strong>
        </div>
        <Button 
          variant="outline-primary" 
          size="sm"
          href="https://maps.google.com/maps?q=Clares+Cove+Guest+house&ll=15.5332702,73.7614404&z=17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-arrow-up-right me-1"></i>
          Open in Maps
        </Button>
      </div>
      <p className="mb-0 small text-muted mt-2">
        <i className="bi bi-geo-alt me-1"></i>
        Coastal Road, Goa, India
      </p>
    </div>
  </div>
</div>
      </Container>
    </div>
  );
};

export default Contact;