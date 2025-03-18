// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing pages/components
import LandingPage from './components/LandingPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import NewEntry from './components/Journal/NewEntry';
import CalendarView from './components/Journal/CalendarView';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <>
    <style>
        {`
          body {
            background-color: #f1faee !important;
          }
        `}
      </style>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-entry" element={<NewEntry />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
