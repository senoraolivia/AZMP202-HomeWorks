import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./index.css"

const SendMessage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSubmit = () => {
    if (name && message) {
      const newMessage = {
        name,
        message,
        color: getRandomColor(), 
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);

      localStorage.setItem("messages", JSON.stringify(updatedMessages));

      setName("");
      setMessage("");
    }
  };

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2>Send a Message</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="https://media.istockphoto.com/id/1452771551/tr/vekt%C3%B6r/contact-us-button-with-cursor-pointer-click-vector-web-button.jpg?s=612x612&w=0&k=20&c=geID61xEOxKlaCBhrwJW27Tg8M-79AQhGE-Dl6QcnAM="
            alt="Send Message"
            width={650}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="list-unstyled">
            {messages.map((msg, index) => (
              <li key={index} className="mb-2">
                <strong style={{ color: msg.color }}>{msg.name}:</strong> {msg.message}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SendMessage;
