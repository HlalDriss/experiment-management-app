import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitExperimentForm from './components/SubmitExperimentForm';
import ViewExperimentStatus from './pages/ViewExperimentStatus';

function App() {
  return (
    <SubmitExperimentForm />
  );
}

export default App;
