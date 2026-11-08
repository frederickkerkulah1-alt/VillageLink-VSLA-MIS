
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import theme from "./theme/theme";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
