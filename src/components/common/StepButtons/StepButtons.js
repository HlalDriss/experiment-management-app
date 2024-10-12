// src/components/common/StepButtons/StepButtons.js

import React from 'react';
import CustomButton from '../CustomButton';

const StepButtons = ({ activeStep, handleBack, handleNext, stepsLength, translations, language }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
      <CustomButton type="button" color="secondary" onClick={handleBack} disabled={activeStep === 0}>
        {translations[language].labels.back}
      </CustomButton>
      {activeStep === stepsLength - 1 ? (
        // Submit button should have type="submit" only on the last step
        <CustomButton type="submit" color="primary" onClick={handleNext}>
          {translations[language].labels.submit}
        </CustomButton>
      ) : (
        // Next button should not submit the form, only move to the next step
        <CustomButton type="button" color="primary" onClick={handleNext}>
          {translations[language].labels.next}
        </CustomButton>
      )}
    </div>
  );
};

export default StepButtons;
