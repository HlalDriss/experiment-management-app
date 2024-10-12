// src/components/steps/Step3.js
import React from 'react';
import InputField from '../common/InputField';
import CustomBox from '../common/CustomBox/CustomBox';

const Step3 = ({ formData, handleChange, errorFields, translations, language }) => (
  <CustomBox>
    <InputField
      label={translations[language].labels.numberOfGroups}
      name="groupCount"
      type="number"
      value={formData.groupCount}
      onChange={handleChange}
      required
      error={!!errorFields.groupCount}
    />
    <InputField
      label={translations[language].labels.notes}
      name="notes"
      value={formData.notes}
      onChange={handleChange}
      multiline
      rows={3}
    />
    {/* Add safety measures input fields here */}
  </CustomBox>
);

export default Step3;
