import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "@/contexts/ThemeContext.jsx";
import AuthModalContextProvider from "@/contexts/AuthModalContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/">
      <ThemeContextProvider>
        <AuthModalContextProvider>
          <App />
        </AuthModalContextProvider>
      </ThemeContextProvider>
    </Router>
  </StrictMode>
);
