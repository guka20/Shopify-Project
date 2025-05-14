import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const obj = { isDark, setIsDark };
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
