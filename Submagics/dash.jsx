'use client';
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // Importing star icon
import Magic from './Magic';
import Creators from './Creators';
import Footer from './Footer';

const Dash = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '20px',
                textAlign: 'center',
                padding: '0 20px',
                width: '100%',
            }}
        >
            {/* Main Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.5rem' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <Box sx={{ marginRight: { xs: 0, md: '7px' } }}>
                    Create viral shorts
                </Box>

                <Box
                    sx={{
                        color: '#ff5722',
                        fontWeight: 'bold',
                        position: 'relative',
                        marginTop: { xs: '10px', md: '0' },
                    }}
                >
                    in seconds with AI 🚀
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '-5px',
                            left: 0,
                            width: '100%',
                            height: '4px',
                            backgroundColor: '#ff5722',
                            marginTop: '5px',
                        }}
                    />
                </Box>
            </Typography>

            {/* Centered Paragraph */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    maxWidth: '600px',
                    textAlign: 'center',
                    color: '#333',
                    marginBottom: '30px',
                }}
            >
                Submagic is the simplest video editor for creating short-form content 10x faster. Designed for creators, teams, and agencies.
            </Typography>

            {/* Call-to-Action Button */}
            <Button
                variant="contained"
                sx={{
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
            >
                Create free video now
            </Button>

            {/* Star Rating Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* 5 Star Icons */}
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} sx={{ color: '#fbc02d', fontSize: '24px' }} />
                ))}
                {/* Rating Text */}
                <Typography sx={{ marginLeft: '10px', fontSize: '1rem', fontWeight: 'bold' }}>
                    4.9 out of 5
                </Typography>
            </Box>

            {/* User Love Text */}
            <Typography
                sx={{
                    marginTop: '5px',
                    fontSize: '0.9rem',
                    color: '#666',
                }}
            >
                Loved by over 1.4 million users
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    color: '#666',
                    marginBottom: '30px',
                }}
            >
                Trusted by top creators and businesses across the world
            </Typography>

            {/* Logos and ratings section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '90px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginTop: '30px',
                }}
            >
                {/* Google Rating */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google"
                        style={{ width: '100px' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '10px' }}>
                            4.9
                        </Typography>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} sx={{ color: '#fbc02d', fontSize: '20px' }} />
                        ))}
                    </Box>
                </Box>

                {/* Trustpilot Rating */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Trustpilot_star_logo.svg"
                        alt="Trustpilot"
                        style={{ width: '100px' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '10px' }}>
                            4.8
                        </Typography>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} sx={{ color: '#4caf50', fontSize: '20px' }} />
                        ))}
                    </Box>
                </Box>

                {/* G2 Rating */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/G2_Logo_Red.svg"
                        alt="G2"
                        style={{ width: '60px' }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '10px' }}>
                            4.9
                        </Typography>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} sx={{ color: '#fbc02d', fontSize: '20px' }} />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Magic and Creators sections */}
            <Box sx={{ marginTop: '90px' }}>
                <Magic />
            </Box>
            <Box sx={{ marginTop: '10px' }}>
                <Creators />
            </Box>

            {/* Footer Section covering full width */}
            <Box sx={{ marginTop: '10px', backgroundColor: '#f9f9f9',  width: '100%' }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Dash;
