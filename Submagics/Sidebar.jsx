// Sidebar.jsx
import React from 'react';
import { Paper, Tabs, Tab, Typography, Box, Button, TextField, Slider } from '@mui/material';
import TimelineEditor from './TimelineEditor';

const themes = [
  'HORMOZI 1', 'DEVIN', 'ELLA', 'TRACY', 'DAN', 'LUKE',
  'Celine', 'Maya', 'KARL', 'WILLIAM', 'HORMOZI 2', 'HORMOZI 3',
  'DAVID', 'Iman', 'LEON', 'Ali', 'BEAST', 'Umi', 'NOAH', 'LEILA', 'JASON', 'Gstaad'
];

const filters = [
  { name: 'None', value: 'none' },
  { name: 'Grayscale', value: 'grayscale(100%)' },
  { name: 'Sepia', value: 'sepia(100%)' },
  { name: 'Brightness', value: 'brightness(150%)' },
  { name: 'Contrast', value: 'contrast(200%)' },
  { name: 'Blur', value: 'blur(5px)' }
];

const Sidebar = ({
  activeTab,
  onTabChange,
  onThemeSelect,
  onCaptionChange,
  captions,
  positionY,
  onPositionYChange,
  selectedFilter,
  onFilterChange,
  onAddMedia,
  mediaItems,
  videoDuration,
}) => {
  return (
    <Paper elevation={3} sx={{ width: '100%', height: 'auto', overflowY: 'auto', padding: 2 }}>
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Style" />
        <Tab label="Captions" />
        <Tab label="B-rolls" />
        <Tab label="Filters" />
      </Tabs>

      <Box mt={4}>
        {activeTab === 0 && (
          <>
            <Typography variant="h6">Themes</Typography>
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

            <Box mt={4}>
              <Typography variant="body2">Position Y (for caption placement)</Typography>
              <Slider value={positionY} onChange={onPositionYChange} min={0} max={100} valueLabelDisplay="auto" />
            </Box>
          </>
        )}

        {activeTab === 1 && (
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
        )}

        {activeTab === 2 && (
          <Box mt={4}>
            <Typography variant="h6">B-rolls - Timeline Editor</Typography>
            <TimelineEditor
              onAddMedia={onAddMedia}
              mediaItems={mediaItems}
              videoDuration={videoDuration}
            />
          </Box>
        )}

        {activeTab === 3 && (
          <Box mt={4}>
            <Typography variant="h6">Apply Filters:</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
              {filters.map((filter, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    backgroundColor: '#444',
                    color: '#fff',
                    height: '50px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                  onClick={() => onFilterChange(filter.value)}
                >
                  {filter.name}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Sidebar;
