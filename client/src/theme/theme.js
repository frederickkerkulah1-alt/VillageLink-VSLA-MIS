import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E3A5F",
    },
    secondary: {
      main: "#2E7D32",
    },
    background: {
      default: "#F5F7FA",
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;