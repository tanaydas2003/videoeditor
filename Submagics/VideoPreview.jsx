// VideoPreview.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const VideoPreview = ({
  videoURL,
  captions,
  positionY,
  themeStyles,
  selectedTheme,
  selectedFilter,
  mediaItems,
}) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Get the selected theme styles
  const theme = themeStyles[selectedTheme] || themeStyles.default;

  // Play/pause audio based on current time
  useEffect(() => {
    mediaItems
      .filter((item) => item.mediaType === 'audio')
      .forEach((item) => {
        const audioElement = document.getElementById(`audio-${item.id}`);
        if (audioElement) {
          if (currentTime >= item.startTime && currentTime <= item.endTime) {
            if (audioElement.paused) {
              audioElement.currentTime = currentTime - item.startTime;
              audioElement.play();
            }
          } else {
            audioElement.pause();
          }
        }
      });
  }, [currentTime, mediaItems]);

  return (
    <Paper elevation={3} sx={{ width: '100%', height: 'auto', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Video Preview
      </Typography>
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...theme,
        }}
      >
        {videoURL ? (
          <video
            ref={videoRef}
            src={videoURL}
            controls
            onTimeUpdate={handleVideoTimeUpdate}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: selectedFilter, // Apply the selected filter
            }}
          />
        ) : (
          <Typography variant="h4" color="white">
            Low Res Preview (Upload Video)
          </Typography>
        )}

        {/* Captions Overlay */}
        {videoURL && captions && (
          <Typography
            sx={{
              position: 'absolute',
              bottom: `${positionY}%`,
              width: '100%',
              textAlign: 'center',
              color: theme.color,
              backgroundColor: theme.backgroundColor,
              fontSize: theme.fontSize,
              padding: '10px',
              opacity: 0.9,
            }}
          >
            {captions}
          </Typography>
        )}

        {/* Render GIFs */}
        {mediaItems
          .filter(
            (item) =>
              item.mediaType === 'gif' &&
              currentTime >= item.startTime &&
              currentTime <= item.endTime
          )
          .map((item) => (
            <img
              key={item.id}
              src={URL.createObjectURL(item.mediaFile)}
              alt="GIF"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '50%',
                maxHeight: '50%',
              }}
            />
          ))}
      </Box>

      {/* Audio Elements */}
      {mediaItems
        .filter((item) => item.mediaType === 'audio')
        .map((item) => (
          <audio
            key={item.id}
            id={`audio-${item.id}`}
            src={URL.createObjectURL(item.mediaFile)}
          />
        ))}
    </Paper>
  );
};

export default VideoPreview;
