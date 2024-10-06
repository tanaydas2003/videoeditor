'use client';
import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar2 from './Navbar2';
import Sidebar from './Sidebar';
import VideoPreview from './VideoPreview';
import VideoControls from './VideoControls';

const themeStyles = {
  'HORMOZI 1': { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', fontSize: '24px' },
  'DEVIN': { backgroundColor: 'rgba(34, 34, 34, 0.8)', color: '#ffcc00', fontSize: '20px' },
  'ELLA': { backgroundColor: 'rgba(68, 68, 68, 0.8)', color: '#ff66cc', fontSize: '22px' },
  'TRACY': { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', fontSize: '28px' },
  'DAN': { backgroundColor: 'rgba(17, 17, 17, 0.8)', color: '#c0c0c0', fontSize: '26px' },
  'LUKE': { backgroundColor: 'rgba(102, 102, 102, 0.8)', color: '#fff', fontSize: '20px' },
  default: { backgroundColor: 'rgba(34, 34, 34, 0.8)', color: '#fff', fontSize: '24px' },
};

const Frames = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('HORMOZI 1');
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [captions, setCaptions] = useState('');
  const [positionY, setPositionY] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [mediaItems, setMediaItems] = useState([]);
  const [videoDuration, setVideoDuration] = useState(100);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const handleThemeSelect = (theme) => setSelectedTheme(theme);
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));

      // Get video duration
      const tempVideo = document.createElement('video');
      tempVideo.src = URL.createObjectURL(file);
      tempVideo.onloadedmetadata = () => {
        setVideoDuration(tempVideo.duration);
      };
    }
  };
  const handleCaptionChange = (e) => setCaptions(e.target.value);
  const handlePositionYChange = (event, newValue) => setPositionY(newValue);
  const handleFilterChange = (filter) => setSelectedFilter(filter);

 
  const handleAddMedia = (mediaItem) => {
    setMediaItems((prevItems) => [...prevItems, mediaItem]);
  };

  return (
    <>
      <Navbar2 />
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: 'calc(100vh - 64px)',
          padding: 2,
          gap: 2,
        }}
      >
        {/* Sidebar */}
        <Box sx={{ order: isMobile ? 2 : 0, width: isMobile ? '100%' : '48%' }}>
          <Sidebar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onThemeSelect={handleThemeSelect}
            onCaptionChange={handleCaptionChange}
            captions={captions}
            positionY={positionY}
            onPositionYChange={handlePositionYChange}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
            onAddMedia={handleAddMedia} 
            mediaItems={mediaItems} 
            videoDuration={videoDuration} 
          />
        </Box>

        {/* Video Preview */}
        <Box sx={{ order: isMobile ? 1 : 0, width: isMobile ? '100%' : '48%' }}>
          <VideoPreview
            videoURL={videoURL}
            captions={captions}
            positionY={positionY}
            themeStyles={themeStyles}
            selectedTheme={selectedTheme}
            selectedFilter={selectedFilter}
            mediaItems={mediaItems} 
          />

          {/* Video Upload Section */}
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            style={{ marginBottom: '20px' }}
          />

          {/* Video Controls */}
          <VideoControls videoURL={videoURL} currentTime={currentTime} />
        </Box>
      </Box>
    </>
  );
};

export default Frames;


