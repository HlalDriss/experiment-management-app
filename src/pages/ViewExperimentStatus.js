import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const experimentData = [
  { title: 'Chromatography', status: 'Pending', date: '2024-03-11' },
  { title: 'Electrolysis', status: 'Approved', date: '2024-03-15' },
  { title: 'Titration', status: 'Rejected', date: '2024-03-20' }
];

const ViewExperimentStatus = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Experiment Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experimentData.map((experiment, index) => (
            <TableRow key={index}>
              <TableCell>{experiment.title}</TableCell>
              <TableCell>{experiment.status}</TableCell>
              <TableCell>{experiment.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewExperimentStatus;
