import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { fetchExperiments, deleteExperiment } from '../api'; // Adjust API methods as needed
import { useNavigate } from 'react-router-dom';

const MyRequests = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // State for alert severity
  const [openAlert, setOpenAlert] = useState(false); // State for alert visibility
  const navigate = useNavigate();

  useEffect(() => {
    const loadExperiments = async () => {
      setLoading(true);
      try {
        const response = await fetchExperiments(); // Fetch experiments from API
        setExperiments(response.data);
      } catch (error) {
        console.error('Error fetching experiments:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    loadExperiments();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true); // Start loading
    try {
      await deleteExperiment(id); // Delete experiment by ID
      setExperiments((prev) => prev.filter((experiment) => experiment.id !== id)); // Update state
      setAlertMessage('Experiment deleted successfully!');
      setAlertSeverity('success');
    } catch (error) {
      console.error('Error deleting experiment:', error);
      setAlertMessage('Failed to delete experiment. Please try again.');
      setAlertSeverity('error');
    } finally {
      setLoading(false); // Stop loading
      setOpenAlert(true); // Show alert
    }
  };

  const handleDetails = (experiment) => {
    navigate('/experiment-report', { state: { experiment } }); // Navigate to report page with experiment data
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
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
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        My Requests
      </Typography>

      {loading ? ( // Show loading indicator while fetching data
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Request Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {experiments.map((experiment) => (
                  <TableRow key={experiment.id}>
                    <TableCell>{experiment.id}</TableCell>
                    <TableCell>{experiment.title}</TableCell>
                    <TableCell>{experiment.requestDate}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          backgroundColor: getStatusColor(experiment.status), // Set background color based on status
                          display: 'inline-block', // Use inline-block to fit the text
                          padding: '2px 6px', // Padding for the status
                          borderRadius: '4px', // Rounded corners
                          color: '#000', // Set text color to ensure it's readable
                        }}
                      >
                        {experiment.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" onClick={() => handleDetails(experiment)} sx={{ marginRight: 1 }}>
                        Details
                      </Button>
                      <Button variant="outlined" color="error" onClick={() => handleDelete(experiment.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {/* Alert for delete confirmation */}
      {openAlert && (
        <Box sx={{ marginTop: 2 }}>
          <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ marginBottom: 2 }}>
            {alertMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default MyRequests;
