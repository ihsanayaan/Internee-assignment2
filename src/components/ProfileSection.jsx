import React from 'react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const ProfileSection = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          textAlign: 'center',
          px: 3,
          py: 5,
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
          background: theme.palette.mode === 'dark'
            ? 'rgba(30,30,30,0.6)'
            : 'rgba(255,255,255,0.6)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 8px 24px rgba(0,0,0,0.4)'
            : '0 8px 24px rgba(0,0,0,0.1)',
          maxWidth: '720px',
          margin: 'auto',
        }}
      >
        <Avatar
          src="/profile.jpg"
          alt="Ihsan Ali"
          sx={{
            width: { xs: 90, md: 120 },
            height: { xs: 100, md: 140 },
            margin: 'auto',
            mb: 2,
            boxShadow: 4,
          }}
        />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Ihsan Ali
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <Typewriter
            words={['Front-End Developer', 'React Developer', 'UI/UX Designer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          fontStyle="italic"
          color="gray"
          maxWidth="600px"
          mx="auto"
        >
          "Creating interactive and user-friendly web interfaces is my passion."
        </Typography>
      </Box>
    </motion.div>
  );
};

export default ProfileSection;
