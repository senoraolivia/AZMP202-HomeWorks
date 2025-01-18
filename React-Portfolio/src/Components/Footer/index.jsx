import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaYoutube, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import Swal from 'sweetalert2';
import "./index.css";

const Footer = () => {
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([]); 

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {

      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);

      localStorage.setItem('messages', JSON.stringify(updatedMessages));

      Swal.fire({
        title: 'Message Sent!',
        text: "Your message: " + message,
        icon: 'success',
        confirmButtonText: 'Okay'
      });

      setMessage(""); 
    } else {
      Swal.fire({
        title: 'Error!',
        text: "Please enter a valid message.",
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  };

  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <h2 className='d-flex justify-content-start text-light mb-4'>Send Your Message</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Message"
                aria-label="Your Message"
                value={message} 
                onChange={handleInputChange} 
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <Row>
              <Col md={4}>
                <h4>About</h4>
                <Nav className="flex-column">
                  <Nav.Link href="#about" className="text-white">About Works</Nav.Link>
                  <Nav.Link href="#partners" className="text-white">My Partners</Nav.Link>
                  <Nav.Link href="#services" className="text-white">My Web-pages</Nav.Link>
                </Nav>
              </Col>
              <Col md={4} className="mb-3">
                <h4>Contact</h4>
                <Nav className="flex-column">
                  <Nav.Link href="#contact" className="text-white">Contact Me</Nav.Link>
                  <Nav.Link href="#faq" className="text-white">FAQ Page</Nav.Link>
                  <Nav.Link href="#about-me" className="text-white">About Me</Nav.Link>
                </Nav>
              </Col>

              <Col md={4} className="mb-3">
                <h4>Follow Us</h4>
              </Col>  
            </Row>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

