// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const sidebarStyle = {
    width: expanded ? "220px" : "70px",
    background: "linear-gradient(180deg, #904bdaff, #2575fc)", // gradient purple-blue
    color: "white",
    height: "100vh",
    transition: "width 0.3s ease",
    paddingTop: "20px",
    position: "fixed",
    left: 0,
    top: 0,
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    fontSize: "16px",
    transition: "background 0.2s, padding-left 0.3s",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  };

  const linkHoverStyle = {
    background: "rgba(204, 23, 23, 0.47)",
    paddingLeft: "24px",
  };

  const [hovered, setHovered] = useState(null);

  const items = [
    { path: "/dashboard/home", label: "Home", icon: "🏠" },
    { path: "/dashboard/profile", label: "Profile", icon: "👤" },
    { path: "/dashboard/monthly-chart", label: "Monthly Chart", icon: "📊" },
    { path: "/dashboard/totalexpenses", label: "Total Expenses", icon: "💳" },
    { path: "/dashboard/logout", label: "Logout", icon: "🚪" },
  ];

  return (
    <div
      style={sidebarStyle}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              to={item.path}
              style={{
                ...linkStyle,
                ...(hovered === index ? linkHoverStyle : {}),
              }}
            >
              <span style={{ marginRight: expanded ? "12px" : "0" }}>
                {item.icon}
              </span>
              {expanded && item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
