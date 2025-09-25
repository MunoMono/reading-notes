// src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Doc from "./pages/Doc";

import "./styles/index.scss";

// Theme bootstrap
const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
const prefersDark =
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
const initialTheme = stored || (prefersDark ? "g90" : "g10");
document.documentElement.setAttribute("data-theme", initialTheme);

function Root() {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    const next = theme === "g90" ? "g10" : "g90";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <BrowserRouter basename="/reading-notes">
      <Routes>
        {/* App is the layout wrapper */}
        <Route path="/" element={<App theme={theme} toggleTheme={toggleTheme} />}>
          <Route index element={<Home />} />
          <Route path="docs/:letter/:slug" element={<Doc />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);