import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div 
      style={{ 
        backgroundColor: '#FAA0A0', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Container className="py-5" style={{ maxWidth: '400px' }}>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '1rem' 
          }}
        >
          <img 
            src="/Logo.png" 
            alt="SoulSync Logo" 
            style={{ width: '150px', height: '140px', marginRight: '2px' }} 
          />
          <h1 className="mb-0 fw-normal">Log In</h1>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button 
            type="submit" 
            className="w-100 text-black custom-btn"
          >
            Log In
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Container>
      
      <style>
        {`
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
    </div>
  );
};

export default Signup;
