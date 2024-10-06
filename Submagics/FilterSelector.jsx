import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const filters = [
  { name: 'None', value: 'none' },
  { name: 'Grayscale', value: 'grayscale(100%)' },
  { name: 'Sepia', value: 'sepia(100%)' },
  { name: 'Brightness', value: 'brightness(150%)' },
  { name: 'Contrast', value: 'contrast(200%)' },
  { name: 'Blur', value: 'blur(5px)' }
];

const FilterSelector = ({ selectedFilter, onFilterChange }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6">Apply Filters:</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' }, // 2 columns on small screens, 3 on larger
          gap: 2,
        }}
      >
        {filters.map((filter, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: '#444',
              color: '#fff',
              height: { xs: '60px', sm: '50px' }, // Larger buttons on mobile
              fontSize: { xs: '14px', sm: '12px' }, // Increase font size for mobile
              fontWeight: 'bold',
            }}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default FilterSelector;
