// src/components/steps/Step1.js
import React from 'react';
import { Grid } from '@mui/material';
import InputField from '../common/InputField';
import CustomBox from '../common/CustomBox/CustomBox';

const Step1 = ({ formData, handleChange, errorFields, translations, language, teachers }) => (
  <CustomBox>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputField
          label={translations[language].labels.experimentTitle}
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          error={!!errorFields.title}
        />
      </Grid>
      <Grid item xs={6}>
        <InputField
          label={translations[language].labels.requestDate}
          name="requestDate"
          type="date"
          value={formData.requestDate}
          onChange={handleChange}
          required
          error={!!errorFields.requestDate}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <InputField
          label={translations[language].labels.experimentDate}
          name="experimentDate"
          type="date"
          value={formData.experimentDate}
          onChange={handleChange}
          required
          error={!!errorFields.experimentDate}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          label={translations[language].labels.selectTeacher}
          name="teacher"
          type="select"
          value={formData.teacher}
          onChange={handleChange}
          options={teachers.map(teacher => ({ label: teacher.name, value: teacher.name }))}
          required
          error={!!errorFields.teacher}
        />
      </Grid>
    </Grid>
  </CustomBox>
);

export default Step1;
