// 'use client';
// import React, { useState, useRef } from 'react';
// import { Paper, Typography, Tabs, Tab, Button, Box, Slider, IconButton, useMediaQuery, TextField } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import ReplayIcon from '@mui/icons-material/Replay';
// import Navbar2 from './Navbar2';

// const themes = [
//   'HORMOZI 1', 'DEVIN', 'ELLA', 'TRACY', 'DAN', 'LUKE',
//   'Celine', 'Maya', 'KARL', 'WILLIAM', 'HORMOZI 2', 'HORMOZI 3',
//   'DAVID', 'Iman', 'LEON', 'Ali', 'BEAST', 'Umi', 'NOAH', 'LEILA', 'JASON', 'Gstaad'
// ];

// // Map theme names to their respective styles
// const themeStyles = {
//   'HORMOZI 1': { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', fontSize: '24px' },
//   'DEVIN': { backgroundColor: 'rgba(34, 34, 34, 0.8)', color: '#ffcc00', fontSize: '20px' },
//   'ELLA': { backgroundColor: 'rgba(68, 68, 68, 0.8)', color: '#ff66cc', fontSize: '22px' },
//   'TRACY': { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', fontSize: '28px' },
//   'DAN': { backgroundColor: 'rgba(17, 17, 17, 0.8)', color: '#c0c0c0', fontSize: '26px' },
//   'LUKE': { backgroundColor: 'rgba(102, 102, 102, 0.8)', color: '#fff', fontSize: '20px' },
//   default: { backgroundColor: 'rgba(34, 34, 34, 0.8)', color: '#fff', fontSize: '24px' }
// };

// // Define video filters
// const filters = [
//   { name: 'None', value: 'none' },
//   { name: 'Grayscale', value: 'grayscale(100%)' },
//   { name: 'Sepia', value: 'sepia(100%)' },
//   { name: 'Brightness', value: 'brightness(150%)' },
//   { name: 'Contrast', value: 'contrast(200%)' },
//   { name: 'Blur', value: 'blur(5px)' }
// ];

// const Frames = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [selectedTheme, setSelectedTheme] = useState('HORMOZI 1');
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [captions, setCaptions] = useState('');  // Track caption input
//   const [positionY, setPositionY] = useState(10);  // Initialize positionY with a default value
//   const videoRef = useRef(null); // Reference to the video element
//   const [currentTime, setCurrentTime] = useState(0);
//   const [selectedFilter, setSelectedFilter] = useState('none');  // Track selected filter

//   // Check if the screen size is small (mobile)
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleThemeSelect = (theme) => {
//     setSelectedTheme(theme);
//   };

//   const getVideoStyles = () => {
//     return themeStyles[selectedTheme] || themeStyles.default;
//   };

//   const handleVideoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//     }
//   };

//   const handleCaptionChange = (e) => {
//     setCaptions(e.target.value);
//   };

//   const handleVideoTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//     }
//   };

//   const handlePositionYChange = (event, newValue) => {
//     setPositionY(newValue);
//   };

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   return (
//     <>
//       <Navbar2 />
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: isMobile ? 'column' : 'row',
//           justifyContent: 'center', 
//           alignItems: 'flex-start',
//           height: 'calc(100vh - 64px)',
//           padding: 2,
//           gap: 2,
//         }}
//       >
//         {/* Sidebar */}
//         <Paper 
//           elevation={3} 
//           sx={{
//             width: isMobile ? '100%' : '48%',
//             height: isMobile ? 'auto' : '600px',
//             overflowY: 'auto',
//             padding: 2,
//             order: isMobile ? 2 : 0,
//           }}
//         >
//           <Tabs
//             value={activeTab}
//             onChange={handleTabChange}
//             variant="fullWidth"
//             textColor="primary"
//             indicatorColor="primary"
//           >
//             <Tab label="Style" />
//             <Tab label="Captions" />
//             <Tab label="B-rolls" />
//             <Tab label="Filters" /> {/* Updated tab */}
//           </Tabs>

//           <Box mt={4}>
//             {activeTab === 0 && (
//               <div>
//                 <Typography variant="h6" gutterBottom>Themes</Typography>
//                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
//                   {themes.map((theme, index) => (
//                     <Button
//                       key={index}
//                       variant="contained"
//                       sx={{
//                         backgroundColor: index % 2 === 0 ? '#000' : '#ccc',
//                         color: '#fff',
//                         height: '50px',
//                         fontSize: '12px',
//                         fontWeight: 'bold',
//                       }}
//                       onClick={() => handleThemeSelect(theme)}
//                     >
//                       {theme}
//                     </Button>
//                   ))}
//                 </Box>

//                 {/* Edit Position Y Slider */}
//                 <Box mt={4}>
//                   <Typography variant="body2">Position Y (for caption placement)</Typography>
//                   <Slider
//                     value={positionY}
//                     onChange={handlePositionYChange}
//                     aria-labelledby="position-y-slider"
//                     min={0}
//                     max={100}
//                     valueLabelDisplay="auto"
//                   />
//                 </Box>
//               </div>
//             )}

//             {activeTab === 1 && (
//               <Box mt={4}>
//                 <Typography variant="h6">Enter Captions:</Typography>
//                 <TextField
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   fullWidth
//                   value={captions}
//                   onChange={handleCaptionChange}
//                   placeholder="Type your captions here..."
//                 />
//               </Box>
//             )}

//             {activeTab === 2 && (
//               <Typography variant="body1">B-rolls Content</Typography>
//             )}

//             {activeTab === 3 && ( // Filters Tab Content
//               <Box mt={4}>
//                 <Typography variant="h6">Apply Filters:</Typography>
//                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
//                   {filters.map((filter, index) => (
//                     <Button
//                       key={index}
//                       variant="contained"
//                       sx={{
//                         backgroundColor: '#444',
//                         color: '#fff',
//                         height: '50px',
//                         fontSize: '12px',
//                         fontWeight: 'bold',
//                       }}
//                       onClick={() => handleFilterChange(filter.value)}
//                     >
//                       {filter.name}
//                     </Button>
//                   ))}
//                 </Box>
//               </Box>
//             )}
//           </Box>
//         </Paper>

//         {/* Video Preview */}
//         <Paper 
//           elevation={3} 
//           sx={{
//             width: isMobile ? '100%' : '48%',
//             height: isMobile ? 'auto' : '600px',
//             padding: 2,
//             order: isMobile ? 1 : 0,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Video Preview
//           </Typography>

//           {/* Video Upload Section */}
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoUpload}
//             style={{ marginBottom: '20px' }}
//           />

//           <Box
//             sx={{
//               position: 'relative',
//               height: '400px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               ...getVideoStyles(),
//             }}
//           >
//             {videoURL ? (
//               <video
//                 ref={videoRef}
//                 src={videoURL}
//                 controls
//                 onTimeUpdate={handleVideoTimeUpdate}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   filter: selectedFilter // Apply the selected filter here
//                 }}
//               />
//             ) : (
//               <Typography variant="h4" color="white">
//                 Low Res Preview (Upload Video)
//               </Typography>
//             )}

//             {/* Captions Overlay */}
//             {videoURL && captions && (
//               <Typography
//                 sx={{
//                   position: 'absolute',
//                   bottom: `${positionY}%`, // Use positionY to control caption placement
//                   width: '100%',
//                   textAlign: 'center',
//                   color: getVideoStyles().color,
//                   backgroundColor: getVideoStyles().backgroundColor,
//                   fontSize: getVideoStyles().fontSize,
//                   padding: '10px',
//                   opacity: 0.9,
//                 }}
//               >
//                 {captions}
//               </Typography>
//             )}
//           </Box>

//           {/* Video Controls */}
//           {videoURL && (
//             <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <IconButton>
//                 <PlayArrowIcon />
//               </IconButton>
//               <Typography variant="body2">{`${Math.floor(currentTime / 60)}:${(currentTime % 60).toFixed(2)}`}</Typography>
//               <IconButton>
//                 <ReplayIcon />
//               </IconButton>
//               <IconButton>
//                 <VolumeUpIcon />
//               </IconButton>
//               <IconButton>
//                 <FullscreenIcon />
//               </IconButton>
//             </Box>
//           )}
//           <Box mt={2}>
//             <Slider
//               defaultValue={0}
//               aria-label="time-indicator"
//               valueLabelDisplay="auto"
//             />
//           </Box>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Frames;
// Frames.jsx
// Frames.jsx
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
  const [videoDuration, setVideoDuration] = useState(100); // Default to 100 seconds

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

  // Function to handle adding media from TimelineEditor
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
            onAddMedia={handleAddMedia} // Pass the handler
            mediaItems={mediaItems} // Pass media items for display
            videoDuration={videoDuration} // Pass video duration
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
            mediaItems={mediaItems} // Pass media items
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


