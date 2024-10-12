// src/App.js

import React from 'react';
import './print.css'; // Import your print styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SubmitExperimentForm from './components/SubmitExperimentForm';
import ExperimentReport from './components/ExperimentReport'; // Import the ExperimentReport component
import Header from './components/Header';
import Footer from './components/Footer';
import MyRequests from './components/MyRequests';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Box sx={{ flex: 1, padding: 3 }}>
          <Routes>
            <Route path="/request-experiment" element={<SubmitExperimentForm />} />
            <Route path="/my-requests" element={<MyRequests />} />
            <Route path="/profile" element={<SubmitExperimentForm />} />
            <Route path="/experiment-report" element={<ExperimentReport />} /> {/* Add the route for the report */}
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
