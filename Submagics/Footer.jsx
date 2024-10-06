import React from 'react';
import { Grid, Box, Typography, Avatar, Link, IconButton } from '@mui/material';
import { LinkedIn, YouTube, Instagram } from '@mui/icons-material';
import { FaDiscord, FaTiktok } from 'react-icons/fa';
import { EmojiEvents } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ padding: '40px 20px', marginTop: '40px'}}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src="https://via.placeholder.com/40" alt="Logo" sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                submagic
              </Typography>
            </Box>

            {/* Language with UK Flag */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,ml: 1 }}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK Flag" sx={{ width: 24, height: 24, mr: 1 }} />
              <Typography variant="body1">EN</Typography>
            </Box>

            {/* Social Icons on the Next Line */}
            <Box sx={{ display: 'flex', mb: 2 }}>
              <IconButton href="https://discord.com" target="_blank">
                <FaDiscord style={{ color: '#7289da', fontSize: '24px' }} />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank">
                <LinkedIn style={{ color: '#0e76a8', fontSize: '24px' }} />
              </IconButton>
              <IconButton href="https://youtube.com" target="_blank">
                <YouTube style={{ color: '#ff0000', fontSize: '24px' }} />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank">
                <Instagram style={{ color: '#C13584', fontSize: '24px' }} />
              </IconButton>
              <IconButton href="https://tiktok.com" target="_blank">
                <FaTiktok style={{ color: '#000', fontSize: '24px' }} />
              </IconButton>
            </Box>

            {/* Description */}
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Submagic is the best AI tool to create captivating short-form videos in seconds for content creators and businesses.
            </Typography>

            {/* Product Hunt Badge */}
            <Box
                sx={{
                    border: '1px solid red',
                    padding: '12px 16px', // Adjust padding for a better look
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    maxWidth: 'fit-content',
                    backgroundColor: '#fff', // Add a white background
                }}
            >
                    {/* Medal Icon */}
                    <EmojiEvents sx={{ color: 'gold', mr: 1, fontSize: '24px' }} /> {/* Add the award icon */}
  
            {/* Text Section */}
            <Box>
            <Typography variant="caption" sx={{ color: 'red', fontWeight: 'bold', display: 'block' }}>
            PRODUCT HUNT
            </Typography>
            <Typography variant="body1" sx={{ color: 'red', fontWeight: 'bold' }}>
            #2 Product of the Week
            </Typography>
        </Box>
        </Box>
        </Box>
        </Grid>

        {/* Middle Section with left-aligned text */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Company */}
            <Grid item xs={12} sm={3} sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Company
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Blog</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Mission</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Pricing</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Merch</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Affiliate</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Languages</Link>
              </Typography>
            </Grid>

            {/* Editing */}
            <Grid item xs={12} sm={3} sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Editing
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Customer Stories</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Auto Subtitle Generator</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">AI Video Editor</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Video to Text</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Add Subtitles to Videos</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">AI Podcast Clip (soon)</Link>
              </Typography>
            </Grid>

            {/* Tools */}
            <Grid item xs={12} sm={3} sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Tools
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">YouTube Title</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Video Script</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Video Hook</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">TikTok Hashtags</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">TikTok Caption</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Video Ideas</Link>
              </Typography>
            </Grid>

            {/* Alternatives */}
            <Grid item xs={12} sm={3} sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Alternatives
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Captions</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Opus Clip</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Zubtitle</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Vidyo</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px', fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Veed</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px',fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Capcut</Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px',fontSize: '0.875rem' }}>
                <Link href="#" color="inherit" underline="none">Pictory</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'left', mt: 4,display: 'flex',justifyContent: 'space-between'}}>
        <Typography variant="body2" color="textSecondary">
          Terms of Services • Privacy Policy
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'right'  }}>
          Made in <Box component="span" sx={{ fontWeight: 'bold' }}>FR</Box> 
          <Box component="span" sx={{ mx: 1 }}>🌍</Box>
          - ©Copyright 2024 Submagic
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
