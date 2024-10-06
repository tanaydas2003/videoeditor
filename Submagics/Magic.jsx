import React from 'react';
import { Button, Grid, Typography, Paper, Box } from '@mui/material';

const features = [
  {
    icon: "✍️",
    title: "Dynamic Captions & Emojis",
    description: "Instantly add dynamic captions in 48 languages to make your videos more engaging and accessible."
  },
  {
    icon: "✂️",
    title: "Faster Text-Based Trimming",
    description: "Remove unwanted footage with our text-based editor. Save time and focus on the content that matters most."
  },
  {
    icon: "🤝",
    title: "Streamlined Collaboration",
    description: "Collaborate with your team, clients, and partners in one workspace to maximize productivity."
  },
  {
    icon: "🖼️",
    title: "Captivating Premium B-Rolls",
    description: "Enhance your videos with Storyblocks stock footage. Create captivating and professional videos effortlessly."
  },
  {
    icon: "✨",
    title: "AI-Powered Features",
    description: "Boost your videos with AI-powered features such as descriptions, zooms, sound effects, and music."
  },
  {
    icon: "🌐",
    title: "Share & Gather Feedback",
    description: "Share your video link with one click and gather feedback to improve and perfect your content."
  }
];

const Magic = () => {
  return (
    <>
      {/* Title with "How the" in black and "magic happens?" in #ff5722 with underline */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontSize: {
            xs: '1.8rem',  // Small size on mobile
            sm: '2.5rem',  // Larger size on small screens (tablet)
            md: '3rem',    // Default size on medium to larger screens
          },
          whiteSpace: 'nowrap',
        }}
      >
        <Box component="span" sx={{ color: 'black' }}>
          How the{' '}
        </Box>
        <Box
          component="span"
          sx={{
            color: '#ff5722',
            textDecoration: 'underline',
            textDecorationColor: '#ff5722',
          }}
        >
          magic happens?
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center',marginBottom: '28px' }}>
        Instantly boost views, engagement, and retention of your videos.
      </Typography>

      {/* Feature Grid with maxWidth */}
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid container spacing={2} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Paper elevation={3} sx={{ padding: 2, minHeight: '100px' }}>
                <Grid container spacing={2} alignItems="center">
                  {/* Icon on the left */}
                  <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">
                      {feature.icon}
                    </Typography>
                  </Grid>

                  {/* Title and description in the same Grid item */}
                  <Grid item xs={9}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 0.5 }}> {/* Adjust margin between title and description */}
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
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
    </>
  );
};

export default Magic;
