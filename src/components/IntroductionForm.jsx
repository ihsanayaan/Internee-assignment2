import React from 'react';
import { TextField, Grid } from '@mui/material';

const IntroductionForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      {[
        { label: 'Full Name', name: 'name' },
        { label: 'Nickname', name: 'nickname' },
        { label: 'Major', name: 'major' },
        { label: 'University', name: 'university' },
        { label: 'Current Year', name: 'year' },
        { label: 'Tech Interests', name: 'techInterests' },
        { label: 'Hobbies', name: 'hobbies' },
        { label: 'Future Goals', name: 'goals' },
      ].map((field, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          <TextField
            fullWidth
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default IntroductionForm;
