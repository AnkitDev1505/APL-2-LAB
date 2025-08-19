// src/App.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, Grid } from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';

function App1() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <BusinessIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TechSolutions
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to TechSolutions
        </Typography>
        <Typography variant="h6" gutterBottom>
          Innovative IT solutions for your business growth
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Container>

      {/* Services Section */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 180 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Web Development</Typography>
                <Typography variant="body2">
                  Build responsive and scalable websites using the latest technologies.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 180 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Mobile Apps</Typography>
                <Typography variant="body2">
                  Cross-platform mobile apps to reach your audience on any device.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 180 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>Cloud Solutions</Typography>
                <Typography variant="body2">
                  Secure and scalable cloud infrastructure for your business.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" align="center">
          TechSolutions is a leading IT company delivering top-notch digital solutions to clients worldwide. 
          Our team of experts helps businesses innovate and grow using technology.
        </Typography>
      </Container>

      {/* Footer */}
      <Container sx={{ mt: 6, py: 4, textAlign: 'center', borderTop: '1px solid #ccc' }}>
        <Typography variant="body2" color="textSecondary">
          © 2025 TechSolutions. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default App1;
