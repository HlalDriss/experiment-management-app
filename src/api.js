import axios from 'axios';

// Replace <your-project-id> with your actual project ID from MockAPI
const api = axios.create({
  baseURL: 'https://6701d98cb52042b542d8ad4f.mockapi.io/api/v1', // Your MockAPI URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitExperiment = async (data) => {
  return await api.post('/experiments', data); // Adjust the endpoint as necessary
};

export const fetchTeachers = async () => {
  return await api.get('/teachers'); // Adjust the endpoint as necessary
};
export const fetchExperiments = async () => {
    return await api.get('/experiments');
  };
  
  // Function to delete an experiment by ID
// Function to delete an experiment by ID
export const deleteExperiment = async (id) => {
    return await api.delete(`/experiments/${id}`); 
  };
  
  