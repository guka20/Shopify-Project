import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "@/contexts/ThemeContext.jsx";
import AuthModalContextProvider from "@/contexts/AuthModalContext.jsx";
import ErrorContextProvider from "@/contexts/ErrorContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/">
      <ThemeContextProvider>
        <AuthModalContextProvider>
          <ErrorContextProvider>
            <App />
          </ErrorContextProvider>
        </AuthModalContextProvider>
      </ThemeContextProvider>
    </Router>
  </StrictMode>
);
