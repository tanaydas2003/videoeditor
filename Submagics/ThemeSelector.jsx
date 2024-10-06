import React from 'react';
import { Box, Typography, Button, Slider } from '@mui/material';

const themes = [
  'HORMOZI 1', 'DEVIN', 'ELLA', 'TRACY', 'DAN', 'LUKE',
  'Celine', 'Maya', 'KARL', 'WILLIAM', 'HORMOZI 2', 'HORMOZI 3',
  'DAVID', 'Iman', 'LEON', 'Ali', 'BEAST', 'Umi', 'NOAH', 'LEILA', 'JASON', 'Gstaad'
];

const ThemeSelector = ({ selectedTheme, onThemeSelect, positionY, onPositionYChange }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>Themes</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
        {themes.map((theme, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: index % 2 === 0 ? '#000' : '#ccc',
              color: '#fff',
              height: '50px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
            onClick={() => onThemeSelect(theme)}
          >
            {theme}
          </Button>
        ))}
      </Box>
      
      {/* Position Y Slider */}
      <Box mt={4}>
        <Typography variant="body2">Position Y (for caption placement)</Typography>
        <Slider
          value={positionY}
          onChange={onPositionYChange}
          aria-labelledby="position-y-slider"
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};

export default ThemeSelector;
