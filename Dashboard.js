// src/pages/Dashboard.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  const [expanded, setExpanded] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ category: "", amount: "" });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit expense
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, formData]);
    setFormData({ category: "", amount: "" });
    setShowExpenseForm(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <div style={{ flex: 1, padding: "20px", background: "#f4f6f8", overflowY: "auto" }}>
        {/* ✅ Page-specific content from nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
