import { createTheme } from "@mui/material/styles";

// Centralized premium theme
const theme = createTheme({
  palette: {
    primary: { main: "#121a26" }, // deep navy
    text: { primary: "#0e1116" }, // near-black
    background: {
      default: "#f8f6f2", // warm white (page background)
      paper: "#fbfaf7", // card/surface
    },
    // Keep default divider neutral; add custom tokens for hairlines
    divider: "rgba(12, 14, 18, 0.08)",
    custom: {
      champagne: "#c8b27a",
      burgundy: "#6e2b33",
      champagneHairline: "rgba(200, 178, 122, 0.35)",
      logoHairline: "rgba(12, 14, 18, 0.06)",
      footerBg: "#0e1116", // rich near-black for footer (less blue)
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ", "
    ),
    h1: {
      fontFamily: "'Libre Baskerville', serif",
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fbfaf7",
        },
      },
    },
  },
});

export default theme;
