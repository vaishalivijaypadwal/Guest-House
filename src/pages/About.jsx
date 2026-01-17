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
      title: "Basic Facilities",
      icon: "🏨",
      color: "#3498db",
      items: [
        { name: "Air Conditioning", icon: <FaSnowflake />, color: "#1abc9c" },
        { name: "Refrigerator", icon: <FaUtensils />, color: "#e74c3c" },
        { name: "Laundry Service", icon: <FaTshirt />, color: "#9b59b6" },
        { name: "Room Service", icon: <FaConciergeBell />, color: "#f39c12" },
        { name: "Free Parking", icon: <FaCar />, color: "#2ecc71" }
      ]
    },
    {
      title: "General Services",
      icon: "⚕️",
      color: "#e74c3c",
      items: [
        { name: "Doctor on Call", icon: <FaUserMd />, color: "#e74c3c" },
        { name: "Health and wellness", icon: <FaFirstAid />, color: "#2ecc71" },
        { name: "First-aid Services", icon: <FaFirstAid />, color: "#e74c3c" },
        { name: "Paid Shuttle Service", icon: <FaShuttleVan />, color: "#3498db" },
        { name: "Paid Airport Transfers", icon: <FaPlane />, color: "#9b59b6" }
      ]
    },
    {
      title: "Room Amenities",
      icon: "🛏️",
      color: "#9b59b6",
      items: [
        { name: "Sofa", icon: <FaCouch />, color: "#d35400" },
        { name: "Air Conditioning", icon: <FaSnowflake />, color: "#1abc9c" },
        { name: "Balcony", icon: <FaUmbrellaBeach />, color: "#27ae60" },
        { name: "Geyser/Water Heater", icon: <FaWater />, color: "#2980b9" },
        { name: "Living Area", icon: <FaCouch />, color: "#8e44ad" },
        { name: "Work Desk", icon: <FaDesktop />, color: "#2c3e50" },
        { name: "King Size Bed", icon: <FaBed />, color: "#16a085" },
        { name: "Private Bath", icon: <FaBath />, color: "#34495e" },
        { name: "Smart TV", icon: <FaTv />, color: "#e74c3c" },
        { name: "Free WiFi", icon: <FaWifi />, color: "#3498db" }
      ]
    },
    {
      title: "Payment Services",
      icon: "💳",
      color: "#2ecc71",
      items: [
        { name: "ATM", icon: <FaMoneyBillWave />, color: "#27ae60" },
        { name: "Credit Card Accepted", icon: <FaMoneyBillWave />, color: "#3498db" },
        { name: "Online Payment", icon: <FaMoneyBillWave />, color: "#9b59b6" }
      ]
    },
    {
      title: "Safety and Security",
      icon: "🛡️",
      color: "#e67e22",
      items: [
        { name: "Fire Extinguishers", icon: <FaFireExtinguisher />, color: "#e74c3c" },
        { name: "Security Guard", icon: <FaShieldAlt />, color: "#2c3e50" },
        { name: "CCTV", icon: <FaVideo />, color: "#3498db" },
        { name: "Safe Deposit Box", icon: <FaShieldAlt />, color: "#f39c12" },
        { name: "Emergency Exit", icon: <FaFireExtinguisher />, color: "#c0392b" }
      ]
    },
    {
      title: "Entertainment",
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
      title: "Outdoor Activities and Sports",
      icon: "🚴",
      color: "#27ae60",
      items: [
        { name: "Cycling", icon: <FaBicycle />, color: "#e17055" },
        { name: "Beach", icon: <FaUmbrellaBeach />, color: "#fdcb6e" },
        { name: "Yoga Area", icon: <FaSun />, color: "#00b894" },
        { name: "Walking Trails", icon: <FaBicycle />, color: "#636e72" }
      ]
    },
    {
      title: "Common Area",
      icon: "🏛️",
      color: "#34495e",
      items: [
        { name: "Garden", icon: <FaTree />, color: "#27ae60" },
        { name: "Balcony/Terrace", icon: <FaUmbrellaBeach />, color: "#f39c12" },
        { name: "Lounge Area", icon: <FaCoffee />, color: "#8e44ad" }
      ]
    },
    {
      title: "Shopping",
      icon: "🛍️",
      color: "#e74c3c",
      items: [
        { name: "Grocery/Supermarket (Within Premise)", icon: <FaShoppingBag />, color: "#2ecc71" },
        { name: "Souvenir Shop", icon: <FaShoppingBag />, color: "#f1c40f" },
        { name: "Jewellery Shop", icon: <FaGem />, color: "#9b59b6" },
        { name: "Convenience Store", icon: <FaShoppingBag />, color: "#3498db" }
      ]
    },
    {
      title: "Business Center and Conferences",
      icon: "💼",
      color: "#2c3e50",
      items: [
        { name: "Photocopying", icon: <FaCopy />, color: "#7f8c8d" },
        { name: "Printer", icon: <FaPrint />, color: "#34495e" },
        { name: "Meeting Room", icon: <FaDesktop />, color: "#3498db" },
        { name: "Fax Service", icon: <FaPrint />, color: "#95a5a6" }
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

      {/* Amenities Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-4">Amenities & Facilities</h2>
           
          </div>

          <Accordion defaultActiveKey="0" className="amenities-accordion">
            {amenitiesCategories.map((category, categoryIndex) => (
              <Accordion.Item eventKey={categoryIndex.toString()} key={categoryIndex}>
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <span className="category-icon me-3" style={{color: category.color}}>
                      {category.icon}
                    </span>
                    <h5 className="mb-0">{category.title}</h5>
                    <span className="badge bg-secondary ms-3">
                      {category.items.length} amenities
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {category.items.map((item, itemIndex) => (
                      <Col lg={4} md={6} key={itemIndex} className="mb-3">
                        <div className="amenity-item d-flex align-items-center p-3 rounded">
                          <div 
                            className="amenity-icon me-3" 
                            style={{color: item.color, backgroundColor: `${item.color}15`}}
                          >
                            {item.icon}
                          </div>
                          <span className="amenity-name">{item.name}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* Add Footer Component */}
      <Footer />
    </div>
  );
};

export default About;