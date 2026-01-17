import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Carousel } from 'react-bootstrap';
import Footer from '../components/Footer'; // Import the Footer component
import './Gallery.css';

const Gallery = () => {
  /* ================= ROOM DATA WITH CATEGORIES ================= */
  const roomImages = [
    { id: 1, category: 'exterior' },
    { id: 2, category: 'exterior'},
    { id: 3, category: 'exterior' },
    { id: 4, category: 'interior'},
    { id: 5, category: 'interior' },
    { id: 6, category: 'interior' },
    { id: 7, category: 'interior'},
    { id: 8, category: 'interior' },
    { id: 9, category: 'interior' }
  ];

  const [imageErrors, setImageErrors] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  /* ================= IMAGE HANDLERS ================= */
  const handleImageError = (e, id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
    e.target.src = "/images/about1.jpg";
  };

  const getImageSrc = (id) => {
    if (imageErrors[id]) {
      return "/images/about1.jpg";
    }
    return `/images/room${id}.jpg`;
  };

  /* ================= FILTER FUNCTIONS ================= */
  const getFilteredImages = () => {
    if (activeFilter === 'all') {
      return roomImages;
    }
    return roomImages.filter(room => room.category === activeFilter);
  };

  const getFilterCount = (filterType) => {
    if (filterType === 'all') {
      return roomImages.length;
    }
    return roomImages.filter(room => room.category === filterType).length;
  };

  /* ================= CAROUSEL HANDLERS ================= */
  const handleImageClick = (index) => {
    setCarouselIndex(index);
    setShowModal(true);
  };

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredImages = getFilteredImages();

  /* ================= UI ================= */
  return (
    <div className="gallery-page">
      {/* Filter Buttons Section */}
      <section className="filter-section py-4 bg-light">
        <Container>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All ({getFilterCount('all')})
            </button>

            <button
              className={`filter-btn ${activeFilter === 'exterior' ? 'active' : ''}`}
              onClick={() => setActiveFilter('exterior')}
            >
              Exterior ({getFilterCount('exterior')})
            </button>

            <button
              className={`filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
              onClick={() => setActiveFilter('interior')}
            >
              Interior ({getFilterCount('interior')})
            </button>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <Container>
          <Row>
            {filteredImages.map((room, index) => (
              <Col lg={4} md={6} sm={12} key={room.id} className="mb-4">
                <Card className="gallery-card shadow-sm">
                  <div 
                    className="gallery-image-wrapper clickable-image"
                    onClick={() => handleImageClick(index)}
                  >
                    <Card.Img
                      src={getImageSrc(room.id)}
                      alt={room.title || `Room ${room.id}`}
                      onError={(e) => handleImageError(e, room.id)}
                    />
                    <div className="category-badge">
                      {room.category === 'exterior' ? 'Exterior' : 'Interior'}
                    </div>
                    <div className="image-overlay">
                      
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Image Carousel Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="xl"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="w-100 text-center">
            {filteredImages[carouselIndex]?.title || `Image ${carouselIndex + 1} of ${filteredImages.length}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Carousel
            activeIndex={carouselIndex}
            onSelect={handleSelect}
            interval={null}
            indicators={true}
            className="gallery-modal-carousel"
          >
            {filteredImages.map((room) => (
              <Carousel.Item key={room.id}>
                <div className="modal-image-container">
                  <img
                    className="d-block w-100"
                    src={getImageSrc(room.id)}
                    alt={room.title || `Room ${room.id}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/about1.jpg";
                    }}
                  />
                </div>
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h5>{room.title || `Room ${room.id}`}</h5>
                  <p className="mb-0">
                    Category: {room.category === 'exterior' ? 'Exterior' : 'Interior'}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          
          {/* Image counter */}
          <div className="image-counter">
            {carouselIndex + 1} / {filteredImages.length}
          </div>
        </Modal.Body>
      </Modal>
      
      {/* Add Footer Component */}
      <Footer />
    </div>
  );
};

export default Gallery;