// src/pages/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div style={{ flex: 1, padding: "20px", background: "#f4f6f8" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
