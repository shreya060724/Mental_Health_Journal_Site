// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Frame from './Frame';
import Cards from './Card';

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = auth.currentUser ? auth.currentUser.email.split('@')[0] : "User";

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          /* Navbar styling */
          .custom-navbar {
            background-color:  #F3CFC6 !important; /* Pastel background for navbar only */
          }
          .custom-navbar .nav-link {
            color: rgb(235, 89, 89) !important; /* Dark gray for better visibility */
            font-weight: 600;
            transition: color 0.3s, transform 0.3s;
            border: 2px solid  #FAA0A0;
            margin-right: 10px;
            border-radius: 8px;
            background-color: #F3CFC6 ; 
          }
          .custom-navbar .nav-link:hover {
            color: rgb(235, 89, 89) !important;
            transform: scale(1.05);
          }

          /* Main container styling */
          .dashboard-container {
            margin-top: 30px; /* Offset for fixed navbar */
            color: #333;
          }
            .styled-image {
            width: 100%; /* Makes the images responsive */
            height: auto;
            border-radius: 5px; /* Rounded corners */
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); /* Soft box shadow */
            transition: transform 0.3s ease-in-out;
          }

          .styled-image:hover {
            transform: scale(1.05); /* Slight zoom effect on hover */
          }
        `}
      </style>
      <Navbar fixed="top" expand="lg" className="custom-navbar">
        <Container>
          <img
            src="/Web_Logo.png"
            alt="SoulSync Logo"
            style={{ width: '110px', height: '75px', marginRight: '1px', alignContent: 'center' }}
          />
          <h3 className='fw-bold' style={{ color: 'rgb(235, 89, 89)' }}>SoulSync</h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/new-entry">New Entry 📝</Nav.Link>
              <Nav.Link as={Link} to="/calendar">Calendar 📅</Nav.Link>
              <Nav.Link as={Link} to="/analytics">Analytics 📉</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout 💻</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="dashboard-container py-5">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            <img
              src="/Logo.png"
              alt="SoulSync Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col xs={12} md={8}>
            <Frame />
          </Col>
        </Row>
        <h3 style={{
          textAlign: 'center',
          fontSize: '2.0rem',
          fontWeight: 'bold',
          fontFamily: 'cursive',
          color: 'rgb(235, 89, 89)'
        }}>Good Morning, {userName}! How was your day?</h3>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <Cards
              title="Calendar 📅"
              text="Flip through your emotional diary - where every day tells a beautiful story!"
              btnText="Calendar"
              linkTo="/calendar"
              style={{ backgroundColor: 'rgb(244, 223, 148)' }}
            />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Cards title="New Entry 📝" text="Pour your heart out today, and let tomorrow smile at your memories!" btnText="New Entry" linkTo="/new-entry" style={{ backgroundColor: ' #AFE1AF' }} />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Cards title="Analytics 📉" text="See your mood's journey unfold like a colorful rollercoaster ride - highs, lows, and all the feels!" btnText="Analytics" linkTo="/analytics" style={{ backgroundColor: ' #FAA0A0' }} />
          </Col>
        </Row>
        <Row className="justify-content-between mt-5">
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <img
              src="/images/first.jpeg"
              alt="first"
              className="styled-image"
            />
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <img
              src="/images/fourth.jpeg"
              alt="first"
              className="styled-image"
            />
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <img
              src="/images/second.jpeg"
              alt="second"
              className="styled-image"
            />
          </Col>
          <Col xs={12} md={3} className="d-flex justify-content-center">
            <img
              src="/images/third.jpeg"
              alt="third"
              className="styled-image"
            />
          </Col>
        </Row>

      </Container>
      <footer style={{
        backgroundColor: ' #F3CFC6',
        color: 'rgb(243, 120, 120)',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px',
        fontWeight: 'bold',
        fontSize: '1rem',
      }}>
        Curated with love @Shreya 🌸
      </footer>
    </>
  );
};

export default Dashboard;
