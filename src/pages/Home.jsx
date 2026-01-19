import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer'; // Import the Footer component
import { Link } from 'react-router-dom';
import { FaBed, FaSwimmingPool, FaUtensils, FaWifi, FaCar, FaUmbrellaBeach, FaSpa, FaTv, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // About images for carousel
  const aboutImages = [
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
    {
      id: 3,
     
    },
    {
      id: 4,
     
    },
    {
      id: 5,
      
    },
    {
      id: 6,
     
    },
    {
      id: 7,
      
    },
    {
      id: 8,
      
    },
    {
      id: 9,
      
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  // Feature highlights
  const features = [
  { icon: <FaBed />, title: "Comfortable Rooms", color: "#3498db" },       // Blue
  { icon: <FaSwimmingPool />, title: "Swimming Pool", color: "#1abc9c" }, // Teal
  { icon: <FaUtensils />, title: "Restaurant", color: "#e67e22" },        // Orange
  { icon: <FaWifi />, title: "Free WiFi", color: "#9b59b6" },              // Purple
  { icon: <FaCar />, title: "Parking", color: "#2ecc71" },                // Green
  { icon: <FaUmbrellaBeach />, title: "Beach Access", color: "#f1c40f" }   // Yellow
];


  // Handle image loading
  const handleImageLoad = (id) => {
    setIsLoaded(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, id) => {
    e.target.onerror = null;
    setImageErrors(prev => ({ ...prev, [id]: true }));
    
    // Fallback to Unsplash images
    const fallbackImages = {
      1: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      2: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      3: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      4: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      5: 'https://images.unsplash.com/photo-1540202403-a2c2908e9c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      6: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      7: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      8: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    };
    
    e.target.src = fallbackImages[id] || fallbackImages[1];
  };

  // Get image source
  const getImageSrc = (id) => {
    if (imageErrors[id]) {
      const fallbackImages = {
        1: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        2: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        3: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        4: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        5: 'https://images.unsplash.com/photo-1540202403-a2c2908e9c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        6: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        7: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      };
      return fallbackImages[id] || fallbackImages[1];
    }
    return `/images/home${id}.jpg`;
  };

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-carousel-section">
        <Carousel 
          fade 
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          interval={4000}
          indicators={true}
          controls={true}
          className="home-carousel"
        >
          {aboutImages.map((image) => (
            <Carousel.Item key={image.id}>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100"
                  src={getImageSrc(image.id)}
                  alt={image.title}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={(e) => handleImageError(e, image.id)}
                />
                {!isLoaded[image.id] && (
                  <div className="image-loading">
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              <Carousel.Caption className="carousel-caption-custom">
                <div className="caption-content">
                  <h3 className="display-5 fw-bold">{image.title}</h3>
                  <p className="lead">{image.description}</p>
                  <div className="mt-4">
                    <Button 
                      variant="light" 
                      size="lg" 
                      as={Link} 
                      to="/gallery"
                      className="me-3"
                    >
                      View Gallery
                    </Button>
                    <Button 
                      variant="outline-light" 
                      size="lg" 
                      as={Link} 
                      to="/about"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="welcome-content">
                <h2 className="display-4 fw-bold mb-4">
                  Welcome to <span className="text-primary">Clares Cove</span>
                </h2>
                <p className="lead mb-4">
                  Experience the perfect blend of traditional Goan hospitality and modern luxury 
                  at our beachfront guest house in Goa.
                </p>
                <p className="lead mb-4">
                  Nestled along the pristine coastline, Clares Cove offers breathtaking ocean views, 
                  spacious accommodations, and authentic cultural experiences that will make your 
                  Goan holiday unforgettable.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button variant="primary" size="lg" as={Link} to="/about">
                    About Us
                  </Button>
                  <Button variant="outline-primary" size="lg" as={Link} to="/contact">
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="welcome-image-container">
                <img
                  src="/images/home9.jpg"
                  alt="Clares Cove Guest House"
                  className="img-fluid rounded shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
     <section className="features-section py-5" style={{ backgroundColor: 'hsla(324, 75%, 67%, 0.089)' }}>
  <Container>
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold mb-3">Facilities & Amenities</h2>
    </div>
    
    <Row>
      {features.map((feature, index) => (
        <Col md={4} lg={2} key={index} className="mb-4">
          <Card className="feature-card text-center border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="feature-icon mb-3">
                {feature.icon}
              </div>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text className="text-muted">{feature.count}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

      {/* About Preview Section */}
      <section className="about-preview-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about-preview-images">
                <div className="row g-3">
                  {aboutImages.slice(0, 4).map((image) => (
                    <Col xs={6} key={image.id}>
                      <div className="preview-image-container">
                        <img
                          src={getImageSrc(image.id)}
                          alt={image.title}
                          className="img-fluid rounded"
                          onError={(e) => handleImageError(e, image.id)}
                        />
                        <div className="image-hover-overlay">
                          <span className="small">{image.title}</span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-preview-content">
                <h2 className="display-6 fw-bold mb-4">Discover Our Story</h2>
                <p className="lead mb-4">
                  Clares Cove Guest House has been welcoming travelers since 2010, 
                  offering authentic Goan experiences with modern comforts.
                </p>
                <div className="mb-4">
                  <h5>What Makes Us Special:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FaStar className="text-warning me-2" />
                      Beachfront location with private access
                    </li>
                    <li className="mb-2">
                      <FaStar className="text-warning me-2" />
                      Authentic Goan architecture and decor
                    </li>
                    <li className="mb-2">
                      <FaStar className="text-warning me-2" />
                      Family-run with personalized service
                    </li>
                    <li className="mb-2">
                      <FaStar className="text-warning me-2" />
                      Sustainable tourism practices
                    </li>
                  </ul>
                </div>
                <Button variant="primary" size="lg" as={Link} to="/about">
                  <FaSpa className="me-2" />
                  Explore More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add Footer Component */}
      <Footer />
      
    </div>
  );
};

export default Home;