// TimelineEditor.jsx
import React, { useState } from 'react';
import { Box, Button, Typography, Slider } from '@mui/material';

const TimelineEditor = ({ onAddMedia, mediaItems, videoDuration }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [mediaType, setMediaType] = useState('gif'); // 'audio' or 'gif'
  const [mediaFile, setMediaFile] = useState(null);

  const handleStartTimeChange = (event, newValue) => {
    setStartTime(newValue);
    if (newValue > endTime) {
      setEndTime(newValue);
    }
  };

  const handleEndTimeChange = (event, newValue) => {
    setEndTime(newValue);
    if (newValue < startTime) {
      setStartTime(newValue);
    }
  };

  const handleMediaTypeChange = (type) => {
    setMediaType(type);
    setMediaFile(null); // Reset media file when media type changes
  };

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    setMediaFile(file);
  };

  const handleAddMedia = () => {
    if (mediaFile && endTime > startTime) {
      onAddMedia({
        startTime,
        endTime,
        mediaType,
        mediaFile,
        id: Date.now(), // Unique identifier
      });
      // Reset inputs
      setStartTime(0);
      setEndTime(0);
      setMediaFile(null);
    } else {
      alert('Please select a valid time range and media file.');
    }
  };

  return (
    <Box>
      <Typography>Select Start Time:</Typography>
      <Slider
        value={startTime}
        onChange={handleStartTimeChange}
        min={0}
        max={videoDuration}
        valueLabelDisplay="auto"
      />

      <Typography>Select End Time:</Typography>
      <Slider
        value={endTime}
        onChange={handleEndTimeChange}
        min={0}
        max={videoDuration}
        valueLabelDisplay="auto"
      />

      <Typography>Select Media Type:</Typography>
      <Box>
        <Button
          variant={mediaType === 'gif' ? 'contained' : 'outlined'}
          onClick={() => handleMediaTypeChange('gif')}
        >
          GIF
        </Button>
        <Button
          variant={mediaType === 'audio' ? 'contained' : 'outlined'}
          onClick={() => handleMediaTypeChange('audio')}
          sx={{ ml: 1 }}
        >
          Audio
        </Button>
      </Box>

      <Box mt={2}>
        <input
          type="file"
          accept={mediaType === 'audio' ? 'audio/*' : 'image/gif'}
          onChange={handleMediaUpload}
        />
      </Box>

      <Button variant="contained" color="primary" onClick={handleAddMedia} sx={{ mt: 2 }}>
        Add to Timeline
      </Button>

      {/* Display existing media items */}
      <Box mt={4}>
        <Typography variant="h6">Media Items on Timeline:</Typography>
        {mediaItems.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <Typography>
              {item.mediaType.toUpperCase()} from {item.startTime}s to {item.endTime}s
            </Typography>
            {/* Add delete or edit buttons here if needed */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimelineEditor;
