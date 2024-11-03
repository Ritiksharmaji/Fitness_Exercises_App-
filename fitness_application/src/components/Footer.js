import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#FF2625', 
        color: 'white', 
        mt: 'auto', 
        p: 4, 
        textAlign: 'center' 
      }}
    >
      {/* Logo or Website Name */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ExercisePro
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Your fitness partner for a healthier life.
      </Typography>

      {/* Quick Links */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="/exercises" color="inherit" underline="hover">
          Exercises
        </Link>
        <Link href="/about" color="inherit" underline="hover">
          About Us
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        <IconButton color="inherit" aria-label="Facebook" href="https://facebook.com" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" aria-label="Twitter" href="https://twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" aria-label="Instagram" href="https://instagram.com" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" aria-label="YouTube" href="https://youtube.com" target="_blank">
          <YouTube />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; {new Date().getFullYear()} ExercisePro. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
