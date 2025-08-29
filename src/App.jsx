import React, { useEffect, useState } from "react";
import { Content } from "@carbon/react";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doc from "./pages/Doc";

function App() {
  // Persisted theme: "g10" (light) or "g90" (dark)
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "g10"
      : "g10"
  );

  const toggleTheme = () => setTheme((t) => (t === "g10" ? "g90" : "g10"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter basename="/reading-notes">
      <HeaderBar theme={theme} toggleTheme={toggleTheme} />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/:letter/:slug" element={<Doc />} />
          <Route path="*" element={<Home />} /> {/* fallback */}
        </Routes>
        <Footer />
      </Content>
    </BrowserRouter>
  );
}

export default App;