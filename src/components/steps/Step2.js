// src/components/steps/Step2.js
import React from 'react';
import InputField from '../common/InputField';
import CustomBox from '../common/CustomBox/CustomBox';

const Step2 = ({ formData, handleChange, errorFields, translations, language }) => (
  <CustomBox>
    <InputField
      label={translations[language].labels.objective}
      name="objective"
      value={formData.objective}
      onChange={handleChange}
      multiline
      rows={4}
      required
      error={!!errorFields.objective}
    />
    {/* Add material input fields here */}
  </CustomBox>
);

export default Step2;
