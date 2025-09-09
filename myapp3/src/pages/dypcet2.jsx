import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

// ✅ Theme with your purple primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#23119aff", // Purplessss
    },
    secondary: {
      main: "#ebf3f5ff", // Orange (for highlights if needed)
    },
  },
});

const App6 = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DYPCET
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Departments</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Welcome to DYPCET
        </Typography>
        <Typography variant="h6" gutterBottom>
          Excellence in Education, Innovation, and Research
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, borderRadius: "8px" }}
        >
          Get Started
        </Button>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", py: 3 }}>
              <CardContent>
                <MenuBookIcon sx={{ fontSize: 40, color: "primary.main" }} />
                <Typography variant="h6" gutterBottom>
                  Quality Education
                </Typography>
                <Typography variant="body2">
                  Providing top-class education with industry-focused curriculum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", py: 3 }}>
              <CardContent>
                <NotificationsIcon sx={{ fontSize: 40, color: "primary.main" }} />
                <Typography variant="h6" gutterBottom>
                  Latest Updates
                </Typography>
                <Typography variant="body2">
                  Stay updated with events, seminars, and workshops.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", py: 3 }}>
              <CardContent>
                <PhotoLibraryIcon sx={{ fontSize: 40, color: "primary.main" }} />
                <Typography variant="h6" gutterBottom>
                  Campus Life
                </Typography>
                <Typography variant="body2">
                  Experience vibrant campus life with various activities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <AppBar position="static" color="primary" sx={{ mt: 5, py: 2 }}>
        <Typography variant="body2" align="center" sx={{ color: "white" }}>
          © 2025 DYPCET. All rights reserved.
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
};

export default App6;
