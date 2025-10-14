// src/App.js
import React, { useState, useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Link,
  Switch,
} from "@mui/material";
import { orange, grey, blue } from "@mui/material/colors";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function App2() {
  // Light/Dark toggle
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: blue[800],
          },
          secondary: {
            main: grey[50],
          },
          background: {
            default: mode === "light" ? "#eaf1faff" : "#e5e5e5ff",
            paper: mode === "light" ? "#dde1e8ff" : "#3f30aeff",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ==== TOP INFO BAR ==== */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 1,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
        }}
      >
        <span>40+ Years of Excellence | NAAC Accredited | ISO Certified</span>
        <span>📞 +91-1234567890 | ✉ info@dygroup.edu.in</span>
      </Box>

      {/* ==== MAIN HEADER ==== */}
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQES1BSiZDSKRg/company-logo_200_200/company-logo_200_200/0/1642422410138/d_y_patil_college_of_engineering__technology_kasaba_bawada_logo?e=2147483647&v=beta&t=M3dkm6QQGxgV_Ny_4TljMxG8L3IXWauB3jObNJOm1Rs"
              alt="Logo"
              width={60}
              height={60}
              style={{ borderRadius: "8px" }}
            />
            <Box>
              <Typography variant="h6">D.Y. Patil Group</Typography>
              <Typography variant="body2" color="text.secondary">
                Education for a brighter future
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={3}>
            <Button color="inherit" href="#admissions">
              Admissions
            </Button>
            <Button color="inherit" href="#courses">
              Courses
            </Button>
            <Button color="inherit" href="#research">
              Research
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
          </Box>

          <Box display="flex" gap={2} alignItems="center">
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
            <Button variant="outlined" color="primary">
              Login
            </Button>
            <Switch
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* ==== HERO SECTION ==== */}
      <Box sx={{ mt: 2 }}>
        <img
          src="https://i.ytimg.com/vi/qmnvdj__6qo/maxresdefault.jpg"
          alt="Campus Banner"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>

      {/* ==== WELCOME SECTION ==== */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to D.Y. Patil Group
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mb: 3 }}>
          We are a leading institution in India dedicated to providing
          world-class education and infrastructure to nurture innovation,
          research, and industry-ready professionals.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Container>

      {/* ==== NOTICES ==== */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom display="flex" alignItems="center" gap={1}>
          <NotificationsIcon /> Latest Notices
        </Typography>
        <Paper sx={{ p: 2 }}>
          <List>
            <ListItem>
              <ListItemText primary="Admissions open for 2025-26 session" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Scholarship application deadline extended" />
            </ListItem>
            <ListItem>
              <ListItemText primary="International Conference on AI – 20th October 2025" />
            </ListItem>
          </List>
        </Paper>
      </Container>

      {/* ==== GALLERY ==== */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom display="flex" alignItems="center" gap={1}>
          <PhotoLibraryIcon /> Events & Gallery
        </Typography>
        <Grid container spacing={2}>
          {[
            "https://image-static.collegedunia.com/public/reviewPhotos/766027/1000001327.jpg",
            "https://sanjaydpatil.com/wp-content/uploads/2025/02/Picture1-e1739857893187.jpg",
            "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/IMG-20210827-WA0012.jpg",
            "https://coek.dypgroup.edu.in/wp-content/uploads/2020/03/DY_Patil_COllege_of_Engg-1024x683.jpg",
          ].map((img, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Paper
                sx={{ overflow: "hidden", borderRadius: 2, height: 200 }}
                elevation={3}
              >
                <img
                  src={img}
                  alt={`Event ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ==== CALL TO ACTION ==== */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          py: 6,
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Earn Your Bachelor’s in Engineering
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Join us in solving the world's biggest challenges with innovation and
          excellence.
        </Typography>
        <Button variant="contained" color="secondary">
          Apply Today
        </Button>
      </Box>

      {/* ==== FOOTER ==== */}
      <Box sx={{ bgcolor: grey[900], color: "white", mt: 6, py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <List>
                <ListItem>
                  <Link href="#admissions" color="inherit" underline="hover">
                    Admissions
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#courses" color="inherit" underline="hover">
                    Courses
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#research" color="inherit" underline="hover">
                    Research
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Pune, Maharashtra, India
              </Typography>
              <Typography variant="body2">Email: info@dygroup.edu.in</Typography>
              <Typography variant="body2">Phone: +91-1234567890</Typography>
            </Grid>
          </Grid>
          <Box textAlign="center" mt={4} pt={2} borderTop="1px solid #faececff">
            © 2025 D.Y. Patil Group - All Rights Reserved
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
