// src/ThemeProvider.tsx
import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";

// Create a theme with custom palette, typography, and components
let theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
      contrastText: "#fff",
    },
    secondary: {
      main: "#43a047", // Green
      contrastText: "#fff",
    },
    background: {
      default: "#f9fafc", // Light background for the app
      paper: "#ffffff", // Paper background for cards, etc.
    },
    text: {
      primary: "#212121", // Dark text
      secondary: "#757575", // Subtle text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#555",
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners for cards and buttons
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Light shadow for cards
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text
          fontWeight: 600,
          borderRadius: 8,
          padding: "10px 20px",
        },
        containedPrimary: {
          boxShadow: "0px 4px 8px rgba(25, 118, 210, 0.4)", // Elevated effect for primary buttons
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "2px solid #e0e0e0",
        },
        indicator: {
          height: 4,
          borderRadius: 2,
          backgroundColor: "#43a047",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "none",
          "&.Mui-selected": {
            color: "#43a047",
          },
        },
      },
    },
  },
});

// Make the theme responsive for different screen sizes
theme = responsiveFontSizes(theme);

interface Props {
  children: React.ReactNode;
}

// ThemeProvider Component
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline ensures consistent styles across browsers */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};





