import React, { useContext } from "react";
import "./App.css";
import Routers from "./Routers";
import { ThemeContext } from "@/contexts/ThemeContext";
import AuthModal from "@/components/AuthModal/AuthModal";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
const App = () => {
  const { isDark } = useContext(ThemeContext);
  const { isAuthModalOpen } = useContext(IsAuthModalOpenContext);
  return (
    <div className={isDark ? "main-element dark" : "main-element"}>
      {isAuthModalOpen && <AuthModal />}
      <Routers />
    </div>
  );
};

export default App;
