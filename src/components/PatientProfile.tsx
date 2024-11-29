import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const PatientProfile = () => {
  const [tabValue, setTabValue] = React.useState<number>(0); // Using strict typing
  const [openDialog, setOpenDialog] = React.useState<boolean>(false); // Dialog state
  const [formData, setFormData] = React.useState({
    name: "John Doe",
    age: 45,
    dob: "1978-05-14",
    address: "123 Main St, Springfield, USA",
  });

  // Tab Change Handler
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue); // Correctly handle the tab state
  };

  // Open Edit Dialog
  const handleEditClick = () => {
    setOpenDialog(true);
  };

  // Close Edit Dialog
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // Handle Form Data Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Edited Info
  const handleSave = () => {
    setOpenDialog(false);
    // You can perform additional logic here to save the data, such as an API call
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9fafc", // Light background for a modern look
        minHeight: "100vh",
      }}
    >
      {/* Profile Header */}
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          marginBottom: 4,
          borderRadius: 4,
          maxWidth: 900,
          margin: "0 auto",
          background: "linear-gradient(45deg, #1976d2, #43a047)", // Gradient for header
          color: "#fff",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                border: "4px solid #fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              src="/path-to-patient-photo.jpg"
              alt="Patient Avatar"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {formData.name}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              Age: {formData.age}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              DOB: {formData.dob}
            </Typography>
            <IconButton
              onClick={handleEditClick} // Open dialog when clicking edit icon
              sx={{ color: "#fff", marginLeft: 2 }}
            >
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs for Sections */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{
          ".MuiTab-root": {
            color: "#1976d2",
            fontWeight: "bold",
          },
          ".Mui-selected": {
            color: "#43a047",
          },
          ".MuiTabs-indicator": {
            backgroundColor: "#43a047",
          },
        }}
      >
        <Tab label="General Info" />
        <Tab label="Medications" />
        <Tab label="Treatments" />
      </Tabs>

      {/* Tab Panels */}
      {tabValue === 0 && (
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            marginTop: 4,
            borderRadius: 4,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            General Information
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Name:</strong> {formData.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Age:</strong> {formData.age}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>DOB:</strong> {formData.dob}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {formData.address}
          </Typography>
        </Paper>
      )}

      {tabValue === 1 && (
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            marginTop: 4,
            borderRadius: 4,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Current Medications
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Paracetamol"
                secondary="500mg - Twice a day"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Amoxicillin"
                secondary="250mg - Once a day"
              />
            </ListItem>
          </List>
        </Paper>
      )}

      {tabValue === 2 && (
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            marginTop: 4,
            borderRadius: 4,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Ongoing Treatments
          </Typography>
          <Card
            sx={{
              backgroundColor: "#e3f2fd",
              marginBottom: 2,
              borderRadius: 4,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardContent>
              <Typography variant="body1">
                <strong>Treatment Name:</strong> Physical Therapy
              </Typography>
              <Typography variant="body2">
                Frequency: 3 sessions per week
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      )}

      {/* Edit Info Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Patient Information</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};









