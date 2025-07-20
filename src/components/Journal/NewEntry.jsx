import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

const NewEntry = () => {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState(3); 
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await addDoc(collection(db, 'entries'), {
        uid: auth.currentUser.uid,
        entry,
        mood: Number(mood),
        tags: tags ? tags.split(',').map((tag) => tag.trim()) : [],
        createdAt: serverTimestamp(),
      });
      setMessage('Your entry has been saved!');
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      setMessage('Error saving entry. Please try again.');
    }
  };

  return (
    <>
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
      <Container className="py-5">
        <Button
          variant="link"
          className="d-flex align-items-center mb-3"
          onClick={() => navigate('/dashboard')}
          style={{ textDecoration: 'none', color: 'rgb(235, 89, 89)', fontSize: '18px' }}
        >
          <FaArrowLeft size={24} style={{ color: 'rgb(235, 89, 89)', marginRight: '8px' }} />
          <span style={{ color: 'rgb(235, 89, 89)', fontWeight: 'bold' }}>Back</span>
        </Button>
        <h2 style={{ color: 'rgb(239, 122, 122)' }}>New Journal Entry</h2>
        {message && <Alert variant="info">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>How are you feeling?</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your reflection..."
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mood Rating (1-5)</Form.Label>
            <Form.Range
              min="1"
              max="6"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tags (optional, comma separated)</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., stress, gratitude"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="custom-btn text-black">
            Save Entry
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default NewEntry;
