import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "@/contexts/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/">
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </StrictMode>
);
