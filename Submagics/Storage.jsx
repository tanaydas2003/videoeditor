import React from 'react';
import { Box, Button, Grid, Typography, IconButton, Switch } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FolderIcon from '@mui/icons-material/Folder';

import Navbar from './Navbar';

const Storage = () => {
  return (
    <>
      <Navbar />

      {/* Top Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          boxShadow: 1,
        }}
      >
        {/* Left Section - All Projects */}
        <Grid container alignItems="center" spacing={2} sx={{ width: 'auto' }}>
          <Grid item>
            <IconButton>
              <AppsIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">All Projects</Typography>
          </Grid>
        </Grid>

        {/* Middle Section - Projects Heading */}
        <Typography variant="h5">Projects</Typography>

        {/* Right Section - Video Count, Invite, Upgrade, New Video */}
        <Grid container alignItems="center" justifyContent="flex-end" spacing={2} sx={{ width: 'auto' }}>
          <Grid item>
            <Typography>1/3 videos</Typography>
            <Switch defaultChecked size="small" />
          </Grid>

          <Grid item>
            <Button variant="contained" color="warning" size="small">
              Upgrade
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              startIcon={<PersonAddIcon />}
              size="small"
            >
              Invite
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              size="small"
              color="primary"
            >
              New video
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Sidebar and Main Content */}
      <Grid container sx={{ height: 'calc(100vh - 100px)', p: 2 }}>
        {/* Sidebar */}
        <Grid item xs={2} sx={{ borderRight: '1px solid #e0e0e0', pr: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton>
              <FolderIcon />
            </IconButton>
            <Typography>New folder</Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={10} sx={{ pl: 2 }}>
          {/* No Projects Message */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60vh',
              border: '1px dashed #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              No projects in this folder
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Upload here
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Storage;
