// src/components/ExperimentReport.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material';

const ExperimentReport = () => {
  const location = useLocation();
  const { experiment } = location.state || {};

  if (!experiment) {
    return <p>No experiment data available.</p>;
  }

  const handlePrint = () => {
    window.print(); // Trigger the browser's print functionality
  };

  // Function to get the background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#ffeb3b'; // Yellow
      case 'accepted':
        return '#4caf50'; // Green
      case 'rejected':
        return '#f44336'; // Red
      default:
        return '#ffffff'; // Default white if status is unknown
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ flexGrow: 1 }}>
            Experiment Report
            <Box
              sx={{
                backgroundColor: getStatusColor(experiment.status), // Set background color based on status
                display: 'inline-block', // Use inline-block to fit the text
                padding: '2px 6px', // Padding for the status
                borderRadius: '4px', // Rounded corners
                fontSize: '0.875rem', // Smaller font size for status
                marginLeft: 2, // Spacing between title and status
                color: '#000', // Set text color to ensure it's readable
              }}
            >
              Status: {experiment.status}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrint}
            className="no-print" // Use the no-print class
            sx={{ marginLeft: 2 }} // Spacing between button and status box
          >
            Print Report
          </Button>
        </Box>

        <Card sx={{ marginTop: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Experiment Information
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Title:</strong> {experiment.title}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Request Date:</strong> {experiment.requestDate}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Experiment Date:</strong> {experiment.experimentDate}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Teacher:</strong> {experiment.teacher}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Objective:</strong> {experiment.objective}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Materials
                </Typography>
                {experiment.materials.length > 0 ? (
                  <ul>
                    {experiment.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    No materials specified.
                  </Typography>
                )}
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Group Count:</strong> {experiment.groupCount}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Notes:</strong> {experiment.notes || 'No notes provided.'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  Safety Measures
                </Typography>
                <ul>
                  {experiment.safetyMeasures.gloves && <li>Gloves</li>}
                  {experiment.safetyMeasures.mask && <li>Mask</li>}
                  {experiment.safetyMeasures.labCoat && <li>Lab Coat</li>}
                </ul>
                {!experiment.safetyMeasures.gloves &&
                !experiment.safetyMeasures.mask &&
                !experiment.safetyMeasures.labCoat ? (
                  <Typography variant="body1" color="textSecondary">
                    No safety measures specified.
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default ExperimentReport;
