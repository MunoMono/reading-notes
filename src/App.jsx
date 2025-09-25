// src/App.jsx
import React from "react";
import { Content } from "@carbon/react";
import HeaderBar from "./components/HeaderBar";
import { Outlet } from "react-router-dom"; // ⬅️ just for nested routes

function App({ toggleTheme, theme }) {
  return (
    <>
      <HeaderBar theme={theme} toggleTheme={toggleTheme} />
      <Content>
        {/* Child routes render here */}
        <Outlet />
      </Content>
    </>
  );
}

export default App;