import Router from './routes';
import React, { useState } from "react";
import ThemeProvider from './theme';
import { themes } from "./theme/themes";
export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider >
      <Router  theme={themes[theme]} setTheme={setTheme}  />
    </ThemeProvider>
  );
}
