import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Switch,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Box,
} from '@mui/material';

function App() {
  const [dropdownValue, setDropdownValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Complete MUI Demo App</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '2rem' }}>
        {/* Card with Form Inputs */}
        <Card style={{ marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Form Inputs</Typography>

            {/* TextField */}
            <TextField label="Name" variant="outlined" fullWidth margin="normal" />

            {/* Dropdown / Select */}
            <Select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              fullWidth
              displayEmpty
              margin="normal"
            >
              <MenuItem value="">Select an Option</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>

            {/* Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
              }
              label="Accept Terms"
            />

            {/* Radio Buttons */}
            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
              row
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            </RadioGroup>

            {/* Switch */}
            <FormControlLabel
              control={
                <Switch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
              }
              label="Toggle Switch"
            />

            {/* Slider */}
            <Typography gutterBottom>Volume</Typography>
            <Slider
              value={sliderValue}
              onChange={(e, newValue) => setSliderValue(newValue)}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />

            {/* Dialog Button */}
            <Button variant="contained" onClick={handleDialogOpen} style={{ marginTop: '1rem' }}>
              Open Dialog
            </Button>

            {/* Dialog */}
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
              <DialogTitle>Sample Dialog</DialogTitle>
              <DialogContent>
                This is a simple MUI Dialog component.
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>

        {/* Table */}
        <Typography variant="h5" gutterBottom>Simple Data Table</Typography>
        <TableContainer component={Paper} style={{ marginBottom: '2rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>28</TableCell>
                <TableCell>USA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>32</TableCell>
                <TableCell>UK</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tabs */}
        <Typography variant="h5" gutterBottom>Tabs Example</Typography>
        <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <Box sx={{ padding: '1rem', border: '1px solid #ddd', marginTop: '1rem' }}>
          {tabIndex === 0 && <Typography>Content of Tab 1</Typography>}
          {tabIndex === 1 && <Typography>Content of Tab 2</Typography>}
          {tabIndex === 2 && <Typography>Content of Tab 3</Typography>}
        </Box>

        {/* Simple Button */}
        <Button variant="outlined" color="secondary" style={{ marginTop: '2rem' }}>
          Another Button
        </Button>
      </Container>
    </div>
  );
}

export default App;
