import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
const LandingPage = () => {
  return (
    <>
      <style>
        {`
          .landing-page {
            background-color: #FAA0A0;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          .logo {
            max-width: 250px;
            width: 100%;
            margin-bottom: 1rem;
          }
          .custom-btn {
            border-radius: 50px;
            padding: 10px 30px;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
            margin: 0 0.5rem;
            background-color: #F3CFC6 !important;
            border: none;
          }
          .custom-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            background-color: #F3CFC6 !important;
          }
        `}
      </style>
      <div className="landing-page">
        <Container className="text-center py-5">
          <img 
            src="/Logo.png"
            alt="SoulSync Logo" 
            className="logo" 
          />
          <h1 className="mb-3"> 🎶 Welcome to SoulSync 🎶</h1>
          <p className="mb-4">Your journey to mindful mental health begins here.</p>
          <div className="my-4">
            <Link to="/signup">
              <Button className="custom-btn text-black">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button className="custom-btn text-black">Log In</Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;

