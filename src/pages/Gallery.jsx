import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Extended room images array
  const roomImages = [
    {
      id: 1,
      title: "Luxury Living Room",
      description: "Experience elegance and comfort in our spacious living areas",
      features: ["Premium Furniture", "Smart Home System", "Panoramic Views"],
      size: "450 sq ft",
      category: "Living Space"
    },
    {
      id: 2,
      title: "Master Bedroom Suite",
      description: "Rest and rejuvenate in our luxurious bedroom suites",
      features: ["King Size Bed", "Walk-in Closet", "Private Balcony"],
      size: "350 sq ft",
      category: "Bedroom"
    },
    {
      id: 3,
      title: "Modern Kitchen",
      description: "Gourmet kitchen with state-of-the-art appliances",
      features: ["Granite Countertops", "Smart Appliances", "Wine Cooler"],
      size: "300 sq ft",
      category: "Kitchen"
    },
    {
      id: 4,
      title: "Elegant Dining Area",
      description: "Perfect setting for family gatherings and entertainment",
      features: ["Custom Dining Table", "Ambient Lighting", "Butler's Pantry"],
      size: "250 sq ft",
      category: "Dining"
    },
    {
      id: 5,
      title: "Spa-like Bathroom",
      description: "Luxurious bathroom with premium amenities",
      features: ["Rain Shower", "Jacuzzi Tub", "Heated Floors"],
      size: "200 sq ft",
      category: "Bathroom"
    },
    {
      id: 6,
      title: "Home Office & Study",
      description: "Productive workspace with modern amenities",
      features: ["Built-in Shelving", "Ergonomic Setup", "Soundproofing"],
      size: "220 sq ft",
      category: "Office"
    },
    {
      id: 7,
      title: "Entertainment Lounge",
      description: "Perfect space for relaxation and entertainment",
      features: ["Home Theater", "Bar Counter", "Pool Table"],
      size: "400 sq ft",
      category: "Entertainment"
    },
    {
      id: 8,
      title: "Outdoor Patio",
      description: "Beautiful outdoor living space",
      features: ["Outdoor Kitchen", "Fire Pit", "Landscaped Garden"],
      size: "600 sq ft",
      category: "Outdoor"
    },
    {
      id: 9,
      title: "Guest Suite",
      description: "Comfortable accommodations for visitors",
      features: ["Private Bath", "Mini Kitchen", "Separate Entrance"],
      size: "280 sq ft",
      category: "Guest Room"
    }
  ];

  const [imagesLoaded, setImagesLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  // Image loading handler
  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, id) => {
    e.target.onerror = null;
    
    // Mark this image as having an error
    setImageErrors(prev => ({ ...prev, [id]: true }));
    
    // Fallback Unsplash IDs
    const fallbackIds = {
      1: '1586023492125-27b2a045854f',
      2: '1560185893-a55cbc8c57e8',
      3: '1484101403632-0fec06b02d7a',
      4: '1560185127-07c22bb5b77b',
      5: '1584622650111-993d426f53d9',
      6: '1558036117-15e82a2c9a9a',
      7: '1648732015699-7f5d3a3d7b6d',
      8: '1512917778-0e1b4e7a9a9f',
      9: '1586023492125-27b2a045854f'
    };
    
    // Use fallback image from Unsplash
    e.target.src = `https://images.unsplash.com/photo-${fallbackIds[id] || fallbackIds[1]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`;
  };

  // Get image source - tries local first, then fallback
  const getImageSrc = (id) => {
    // If we know this image failed before, return the fallback URL directly
    if (imageErrors[id]) {
      const fallbackIds = {
        1: '1586023492125-27b2a045854f',
        2: '1560185893-a55cbc8c57e8',
        3: '1484101403632-0fec06b02d7a',
        4: '1560185127-07c22bb5b77b',
        5: '1584622650111-993d426f53d9',
        6: '1558036117-15e82a2c9a9a',
        7: '1648732015699-7f5d3a3d7b6d',
        8: '1512917778-0e1b4e7a9a9f',
        9: '1586023492125-27b2a045854f'
      };
      return `https://images.unsplash.com/photo-${fallbackIds[id] || fallbackIds[1]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`;
    }
    
    // Try local image first
    return `/images/room${id}.jpg`;
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  // Filter options
  const categories = [...new Set(roomImages.map(room => room.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRooms = selectedCategory === 'All' 
    ? roomImages 
    : roomImages.filter(room => room.category === selectedCategory);

  return (
    <div className="gallery-page">
     
      {/* Category Filter */}
      <section className="filter-section py-4 bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Button 
              variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedCategory('All')}
              className="px-4"
            >
              All Rooms
            </Button>
            {categories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                onClick={() => setSelectedCategory(category)}
                className="px-4"
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Carousel */}
      <section className="featured-carousel-section py-5">
        <Container>
          
          
          <Carousel fade indicators={true} interval={4000} className="gallery-carousel">
            {roomImages.slice(0, 5).map((room) => (
              <Carousel.Item key={room.id}>
                <div className="carousel-image-container">
                  <img
                    className="d-block w-100 gallery-carousel-img"
                    src={getImageSrc(room.id)}
                    alt={room.title}
                    onLoad={() => handleImageLoad(room.id)}
                    onError={(e) => handleImageError(e, room.id)}
                  />
                  {!imagesLoaded[room.id] && (
                    <div className="image-loading">
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
                <Carousel.Caption className="gallery-carousel-caption">
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <div className="d-flex justify-content-center flex-wrap mt-3">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="badge bg-light text-dark me-2 mb-2 px-3 py-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Room Grid Gallery */}
      <section className="room-gallery-section py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="mb-0">All Rooms ({filteredRooms.length})</h2>
            <div className="sort-options">
              <select 
                className="form-select w-auto"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <Row>
            {filteredRooms.map((room) => (
              <Col key={room.id} lg={4} md={6} className="mb-4">
                <Card className="h-100 gallery-room-card shadow-sm" onClick={() => handleRoomClick(room)}>
                  <div className="gallery-image-wrapper">
                    <Card.Img 
                      variant="top"
                      src={getImageSrc(room.id)}
                      alt={room.title}
                      onError={(e) => handleImageError(e, room.id)}
                    />
                    <div className="image-overlay">
                      <span className="view-details-btn">Click to View Details</span>
                    </div>
                    <div className="room-category-badge">{room.category}</div>
                    <div className="room-size-badge">{room.size}</div>
                  </div>
                  <Card.Body>
                    <Card.Title>{room.title}</Card.Title>
                    <Card.Text>{room.description}</Card.Text>
                    <div className="room-features">
                      {room.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="feature-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0">
                    <Button 
                      variant="outline-primary" 
                      className="w-100"
                      onClick={() => handleRoomClick(room)}
                    >
                      <i className="bi bi-zoom-in me-2"></i>
                      View Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Room Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedRoom && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedRoom.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="room-modal-content">
                <img
                  src={getImageSrc(selectedRoom.id)}
                  alt={selectedRoom.title}
                  className="img-fluid rounded mb-4"
                  onError={(e) => handleImageError(e, selectedRoom.id)}
                />
                <div className="room-details">
                  <h5>Description</h5>
                  <p>{selectedRoom.description}</p>
                  
                  <h5 className="mt-4">Features</h5>
                  <Row>
                    {selectedRoom.features.map((feature, index) => (
                      <Col md={6} key={index}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  
                  <div className="room-specs mt-4">
                    <Row>
                      <Col md={4}>
                        <div className="spec-item">
                          <i className="bi bi-rulers me-2"></i>
                          <strong>Size:</strong> {selectedRoom.size}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="spec-item">
                          <i className="bi bi-tags me-2"></i>
                          <strong>Category:</strong> {selectedRoom.category}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="spec-item">
                          <i className="bi bi-house-door me-2"></i>
                          <strong>Room ID:</strong> {selectedRoom.id}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" as={Link} to="/contact" onClick={handleCloseModal}>
                <i className="bi bi-calendar-check me-2"></i>
                Book This Room
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;