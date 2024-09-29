import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Box, Stepper, Step, StepLabel, FormControlLabel, Checkbox, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

const SubmitExperimentForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Individual input state
  const [title, setTitle] = useState('');
  const [requestDate, setRequestDate] = useState('');
  const [experimentDate, setExperimentDate] = useState('');
  const [teacher, setTeacher] = useState('');
  const [objective, setObjective] = useState('');
  const [materials, setMaterials] = useState([]);
  const [materialName, setMaterialName] = useState('');
  const [materialQuantity, setMaterialQuantity] = useState('');
  const [groupCount, setGroupCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [safetyMeasures, setSafetyMeasures] = useState({ gloves: false, mask: false, labCoat: false });

  const steps = ['Basic Information', 'Experiment Details', 'Scheduling & Safety'];
  const teachers = ["Ahmed Kannaany", "Mohammad Said", "Other Teacher"];

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const addMaterial = () => {
    if (materialName && materialQuantity) {
      setMaterials((prevMaterials) => [...prevMaterials, { name: materialName, quantity: materialQuantity }]);
      setMaterialName('');
      setMaterialQuantity('');
    }
  };

  const removeMaterial = (index) => {
    const updatedMaterials = [...materials];
    updatedMaterials.splice(index, 1);
    setMaterials(updatedMaterials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      requestDate,
      experimentDate,
      teacher,
      objective,
      materials,
      groupCount,
      notes,
      safetyMeasures,
    };
    console.log(formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              label="Experiment Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Request Date"
              type="date"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Experiment Date"
              type="date"
              value={experimentDate}
              onChange={(e) => setExperimentDate(e.target.value)}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              label="Select Teacher"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              fullWidth
              required
              margin="normal"
            >
              {teachers.map((teacher, index) => (
                <MenuItem key={index} value={teacher}>
                  {teacher}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              label="Objective of Experiment"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              multiline
              rows={4}
              fullWidth
              required
              margin="normal"
            />
            <Typography variant="h6" gutterBottom>Add Materials</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Material Name"
                  value={materialName}
                  onChange={(e) => setMaterialName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  value={materialQuantity}
                  onChange={(e) => setMaterialQuantity(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={addMaterial} sx={{ marginBottom: '16px' }}>
              Add Material
            </Button>
            <List>
              {materials.map((material, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${material.name} - Quantity: ${material.quantity}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeMaterial(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      case 2:
        return (
          <Box>
            <TextField
              label="Number of Groups"
              type="number"
              value={groupCount}
              onChange={(e) => setGroupCount(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Notes for Lab Technician"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              multiline
              rows={3}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6" gutterBottom>Safety Measures</Typography>
            <FormControlLabel
              control={<Checkbox checked={safetyMeasures.gloves} onChange={(e) => setSafetyMeasures({ ...safetyMeasures, gloves: e.target.checked })} />}
              label="Gloves"
            />
            <FormControlLabel
              control={<Checkbox checked={safetyMeasures.mask} onChange={(e) => setSafetyMeasures({ ...safetyMeasures, mask: e.target.checked })} />}
              label="Mask"
            />
            <FormControlLabel
              control={<Checkbox checked={safetyMeasures.labCoat} onChange={(e) => setSafetyMeasures({ ...safetyMeasures, labCoat: e.target.checked })} />}
              label="Lab Coat"
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Submit Experiment Request</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        {getStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default SubmitExperimentForm;
