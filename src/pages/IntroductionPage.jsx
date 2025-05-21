import React, { useState } from 'react';
import ProfileSection from '../components/ProfileSection';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import IntroductionForm from '../components/IntroductionForm';
import PreviewCard from '../components/PreviewCard';
import ThemeToggle from '../components/ThemeToggle';

const IntroductionPage = () => {
  const [formData, setFormData] = useState({
    name: 'Ihsan Ali',
    nickname: 'Ihsan',
    major: 'BS Computer Science',
    university: 'University of Agriculture Peshawar',
    year: '2020-2024',
    techInterests: 'HTML5, CSS3, JavaScript, React.js, Responsive Web Design, Git & GitHub',
    hobbies: 'Designing, Learning new technologies, Team collaboration',
    goals: 'Improve frontend skills, build real-world React apps, expand professional network, prepare for full-stack or UI/UX career',
  });

  return (
    <>
      {/* SVG Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgb(0, 39, 0) 0%,rgb(0, 39, 51) 100%)',
          color: '#fff',
          py: { xs: 6, md: 25 },
          px: 2,
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
          <ThemeToggle />
        </Box>
        <Typography variant="h3" fontWeight="bold">
          Welcome to Internee.pk Internship
        </Typography>
        <Typography variant="h6" mt={2}>
          Assignment 2 – Self Introduction
        </Typography>
        <svg
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,176C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>

      {/* ✅ Profile Section immediately below header */}
      <Container maxWidth="md" sx={{ mt: -10 }}>
        <ProfileSection />
      </Container>

      {/* Form + Preview Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={5} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight="medium" textAlign="center">
            My Self Introduction
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <IntroductionForm formData={formData} setFormData={setFormData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <PreviewCard formData={formData} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default IntroductionPage;
