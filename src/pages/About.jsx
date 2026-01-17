import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { 
  FaSnowflake, FaTshirt, FaCar, FaUserMd, FaFirstAid,
  FaShuttleVan, FaPlane, FaCouch, FaFan, FaUmbrellaBeach,
  FaWater, FaDesktop, FaMoneyBillWave, FaFireExtinguisher,
  FaShieldAlt, FaVideo, FaCocktail, FaMoon, FaSpa,
  FaCut, FaBicycle, FaTree, FaReception, FaShoppingBag,
  FaGem, FaCopy, FaPrint, FaHospital, FaLuggageCart,
  FaUtensils, FaWifi, FaSwimmingPool, FaTv, FaCoffee,
  FaConciergeBell, FaBed, FaBath, FaWind, FaSun
} from 'react-icons/fa';
import Footer from '../components/Footer'; // Import the Footer component
import './About.css';

const About = () => {
  // State for image error handling
  const [imageError, setImageError] = useState(false);

  // Amenities data organized by categories
  const amenitiesCategories = [
    {
      
      icon: "🏨",
      color: "#3498db",
      items: [
        
        { name: "Refrigerator", icon: <FaUtensils />, color: "#e74c3c" },
        { name: "Laundry Service", icon: <FaTshirt />, color: "#9b59b6" },
        { name: "Room Service", icon: <FaConciergeBell />, color: "#f39c12" },
        { name: "Free Parking", icon: <FaCar />, color: "#2ecc71" }
      ]
    },
    
    {
     
      icon: "🛏️",
      color: "#9b59b6",
      items: [
        { name: "Sofa", icon: <FaCouch />, color: "#d35400" },
       
        { name: "Balcony", icon: <FaUmbrellaBeach />, color: "#27ae60" },
        { name: "Geyser/Water Heater", icon: <FaWater />, color: "#2980b9" },
       
        { name: "King Size Bed", icon: <FaBed />, color: "#16a085" },
        { name: "Private Bath", icon: <FaBath />, color: "#34495e" },
        { name: "Smart TV", icon: <FaTv />, color: "#e74c3c" },
        { name: "Free WiFi", icon: <FaWifi />, color: "#3498db" }
      ]
    },
    {
     
      icon: "💳",
      color: "#2ecc71",
      items: [
        { name: "ATM", icon: <FaMoneyBillWave />, color: "#27ae60" },
        { name: "Credit Card Accepted", icon: <FaMoneyBillWave />, color: "#3498db" },
        { name: "Online Payment", icon: <FaMoneyBillWave />, color: "#9b59b6" }
      ]
    },
    {
     
      icon: "🛡️",
      color: "#e67e22",
      items: [
        { name: "Fire Extinguishers", icon: <FaFireExtinguisher />, color: "#e74c3c" },
        { name: "Security Guard", icon: <FaShieldAlt />, color: "#2c3e50" },
        { name: "CCTV", icon: <FaVideo />, color: "#3498db" },
       
      ]
    },
    {
     
      icon: "🎭",
      color: "#9b59b6",
      items: [
        { name: "Beach club", icon: <FaCocktail />, color: "#1abc9c" },
        { name: "Night Club", icon: <FaMoon />, color: "#34495e" },
        { name: "Beauty and Spa", icon: <FaSpa />, color: "#e84393" },
        { name: "Salon", icon: <FaCut />, color: "#fd79a8" },
        { name: "Swimming Pool", icon: <FaSwimmingPool />, color: "#0984e3" }
      ]
    },
    {
     
      icon: "🚴",
      color: "#27ae60",
      items: [
        { name: "Cycling", icon: <FaBicycle />, color: "#e17055" },
        { name: "Beach", icon: <FaUmbrellaBeach />, color: "#fdcb6e" },
        { name: "Yoga Area", icon: <FaSun />, color: "#00b894" },
        { name: "Walking Trails", icon: <FaBicycle />, color: "#636e72" }
      ]
    },
    
    
    
  ];

  // Image error handler
  const handleImageError = (e) => {
    e.target.onerror = null;
    setImageError(true);
    e.target.src = "/images/about1.jpg";
  };

  return (
    <div className="about-page">
      {/* Header Section */}
      

      {/* Introduction */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-intro">
                <h2 className="mb-4">Welcome to Clares Cove Guest House</h2>
                <p className="lead">
                  The Clarem Guest House is situated in Varca South Goa, a state in western India with coastlines stretching along the Arabian Sea. Goa is one of the most loved tourist destination known for its beaches. The property is at a distance of 28 km from Goa Dabolim International Airport while Madgaon Railway Station is 9 km and Margao Bus Terminal is 10 km away.
                  For a relaxed and comfortable stay, an array of facilities are offered such as front desk, parking and room service. These spacious guest-rooms are equipped with exquisite and comfortable furniture and bedding. The apartments are fitted with amenities like television, telephone, attached bathroom and various other essential bathroom toiletries.
                  Cool off and have a relax stay at Clarem Guest House!
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-image-container">
                <img 
                  src="/images/about1-main.jpg" 
                  alt="Clares Cove Guest House"
                  className="img-fluid rounded shadow-lg"
                  onError={handleImageError}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Amenities Section - All in One Grid */}
<section 
  className="py-5" 
  style={{ backgroundColor: 'hsla(324, 75%, 67%, 0.089)' }}
>
  <Container>
    <div className="text-center mb-5">
      <h2 className="mb-4">Amenities & Facilities</h2>
    </div>

    {/* All Amenities in One Grid */}
    <Row>
      {amenitiesCategories.flatMap((category, categoryIndex) => 
        category.items.map((item, itemIndex) => ({
          ...item,
          category: category.title,
          categoryColor: category.color,
          categoryIcon: category.icon,
          id: `${categoryIndex}-${itemIndex}`
        }))
      ).map((item) => (
        <Col lg={3} md={4} sm={6} key={item.id} className="mb-4">
          <div className="amenity-item d-flex align-items-center p-3 rounded bg-white shadow-sm h-100">
            <div 
              className="amenity-icon me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
              style={{
                color: item.color, 
                backgroundColor: `${item.color}15`,
                width: '48px',
                height: '48px',
                fontSize: '1.2rem'
              }}
            >
              {item.icon}
            </div>
            <div className="d-flex flex-column">
              <span className="amenity-name fw-medium mb-1">{item.name}</span>
              <small className="text-muted">{item.category}</small>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
      {/* Add Footer Component */}
      <Footer />
    </div>
  );
};

export default About;