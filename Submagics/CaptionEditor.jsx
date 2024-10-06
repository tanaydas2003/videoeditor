import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const CaptionEditor = ({ captions, onCaptionChange }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6">Enter Captions:</Typography>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={captions}
        onChange={onCaptionChange}
        placeholder="Type your captions here..."
      />
    </Box>
  );
};

export default CaptionEditor;
