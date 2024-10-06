import React from 'react';
import { Grid, Typography, Avatar, Box, Paper, IconButton, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const profiles = [
  {
    name: 'Simon Sinek',
    handle: '@simonsinek',
    avatar: 'https://via.placeholder.com/50',
    videoThumbnail: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I', 
  },
  {
    name: 'Kendall Jenner',
    handle: '@kendalljenner',
    avatar: 'https://via.placeholder.com/50',
    videoThumbnail: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
  },
  {
    name: 'Ali Abdaal',
    handle: '@aliabdaal',
    avatar: 'https://via.placeholder.com/50',
    videoThumbnail: 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU',
  },
  {
    name: 'Iman Ghadzi',
    handle: '@imanghadzi',
    avatar: 'https://via.placeholder.com/50',
    videoThumbnail: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
  }
];

const CreatorsVideos = () => {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '40px auto', textAlign: 'center' }}>
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          color: 'gray',
          marginBottom: '40px',
        }}
      >
        Accelerate your growth by posting high-quality shorts daily, effortlessly edited by AI.
      </Typography>

      {/* Grid layout for the videos */}
      <Grid container spacing={4} justifyContent="center">
        {profiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {/* Profile Info outside of the card */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 50, height: 50 }} />
              <Box sx={{ marginLeft: '12px', textAlign: 'left' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {profile.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {profile.handle}
                </Typography>
              </Box>
            </Box>

            {/* Video Card */}
            <Paper
              elevation={3}
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '450px',  // Set a fixed height for the card
              }}
            >
              {/* Video Thumbnail that covers the whole card */}
              <Box
                component="img"
                src={profile.videoThumbnail}
                alt={profile.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',  // Ensures the image covers the card
                }}
              />

              {/* Play Button */}
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  backgroundColor: '#ff5722',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#e64a19',
                  },
                }}
              >
                <PlayArrowIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 6,
          backgroundColor: '#ff5722',
          color: 'white',
          fontWeight: 'bold',
          padding: '10px 30px',
          borderRadius: '30px',
          fontSize: '1rem',
          textTransform: 'none',
          marginBottom: '20px',
          '&:hover': {
              backgroundColor: '#e64a19',
          },
        }}
        size="large"
      >
        Create free video now
      </Button>
    </Box>
  );
};

export default CreatorsVideos;
