// src/components/SubmitExperimentForm.js

import React, { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import StepButtons from './common/StepButtons/StepButtons';
import { submitExperiment, fetchTeachers } from '../api';
import translations from '../translations';
import MuiAlert from '@mui/material/Alert';

// Alert component with forwardRef
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SubmitExperimentForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    requestDate: '',
    experimentDate: '',
    teacher: '',
    objective: '',
    materials: [],
    groupCount: 1,
    notes: '',
    safetyMeasures: { gloves: false, mask: false, labCoat: false },
    status: 'pending',
  });
  const [teachers, setTeachers] = useState([]);
  const [errorFields, setErrorFields] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // Change alert severity based on success/failure
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate(); // For navigation after submission

  const steps = translations[language].stepTitles;

  // Fetch teachers data on component mount
  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const response = await fetchTeachers();
        setTeachers(response.data); // Set fetched teacher data
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    loadTeachers();
  }, []);

  // Handle moving to the next step
  const handleNext = () => {
    const errors = validateFields(activeStep);
    if (Object.keys(errors).length > 0) {
      setErrorFields(errors);
      setAlertMessage(translations[language].errors.required);
      setAlertSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    setErrorFields({});
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to next step
  };

  // Handle moving back to the previous step
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // Validate fields based on the current step
  const validateFields = (step) => {
    const errors = {};
    switch (step) {
      case 0:
        if (!formData.title) errors.title = true;
        if (!formData.requestDate) errors.requestDate = true;
        if (!formData.experimentDate) errors.experimentDate = true;
        if (!formData.teacher) errors.teacher = true;
        break;
      case 1:
        if (!formData.objective) errors.objective = true;
        break;
      case 2:
        if (!formData.groupCount) errors.groupCount = true;
        // Add additional validation for Step 3 fields if needed
        break;
      default:
        break;
    }
    return errors;
  };

  // Handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Submit button clicked, attempting to submit...");

    const errors = validateFields(activeStep); // Validate fields before submitting
    if (Object.keys(errors).length > 0) {
      setErrorFields(errors);
      setAlertMessage(translations[language].errors.required);
      setAlertSeverity('error');
      setOpenSnackbar(true);
      console.log("Validation failed. Errors:", errors); // Log validation errors
      return; // Prevent submission if there are validation errors
    }

    try {
      console.log("Form data to be submitted:", formData); // Log form data
      const response = await submitExperiment(formData); // Submit form data to API
      console.log('Experiment submitted:', response.data); // Log response from API

      // Show success alert
      setAlertMessage('Experiment added successfully!');
      setAlertSeverity('success');
      setOpenSnackbar(true);

      // Redirect to report page after showing success alert
      setTimeout(() => {
        navigate('/experiment-report', { state: { experiment: response.data } }); // Redirect with experiment data
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error submitting experiment:', error); // Log API error
      setAlertMessage('Failed to submit experiment. Please try again.');
      setAlertSeverity('error');
      setOpenSnackbar(true);
    }
  };

  // Determine what content to show for the current step
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} handleChange={handleChange} errorFields={errorFields} translations={translations} language={language} teachers={teachers} />;
      case 1:
        return <Step2 formData={formData} handleChange={handleChange} errorFields={errorFields} translations={translations} language={language} />;
      case 2:
        return <Step3 formData={formData} handleChange={handleChange} errorFields={errorFields} translations={translations} language={language} />;
      default:
        return 'Unknown step';
    }
  };

  const handleSnackbarClose = () => setOpenSnackbar(false);

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {getStepContent(activeStep)} {/* Render current step's content */}

        {/* Explicitly handle Next and Submit separately */}
        {activeStep === steps.length - 1 ? (
          <StepButtons
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleSubmit} // On the last step, call handleSubmit
            stepsLength={steps.length}
            language={language}
            translations={translations}
          />
        ) : (
          <StepButtons
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext} // For other steps, just move to the next step
            stepsLength={steps.length}
            language={language}
            translations={translations}
          />
        )}
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubmitExperimentForm;
