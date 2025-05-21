import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
const PreviewCard = ({ formData }) => {
  return (
    <Card sx={{ mt: 4, border: '1px solid #ddd', borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h5">{formData.name}</Typography>
        <Typography>Nickname: {formData.nickname}</Typography>
        <Typography>Major: {formData.major}</Typography>
        <Typography>University: {formData.university}</Typography>
        <Typography>Year: {formData.year}</Typography>
        <Typography>Tech Interests: {formData.techInterests}</Typography>
        <Typography>Hobbies: {formData.hobbies}</Typography>
        <Typography>Future Goals: {formData.goals}</Typography>
        <Typography sx={{ mt: 2, fontStyle: 'italic' }}>
          Thanks to Internee.pk for this amazing opportunity!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
