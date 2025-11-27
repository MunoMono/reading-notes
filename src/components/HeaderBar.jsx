// src/components/HeaderBar.jsx
import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "@carbon/react";
import { Moon, Sun } from "@carbon/icons-react";
import { useNavigate } from "react-router-dom";

function HeaderBar({ theme, toggleTheme }) {
  const isDark = theme === "g90";
  const base = import.meta.env.BASE_URL || "/";
  const navigate = useNavigate();

  return (
    <Header aria-label="Reading notes">
      <HeaderName href={base} prefix="">
        Graham Newman reading notes
      </HeaderName>

      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem onClick={() => navigate("/")}>
          Notes
        </HeaderMenuItem>
        <HeaderMenuItem onClick={() => navigate("/visualizations")}>
          Visualizations
        </HeaderMenuItem>
      </HeaderNavigation>

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={toggleTheme}
          tooltipAlignment="end"
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

export default HeaderBar;