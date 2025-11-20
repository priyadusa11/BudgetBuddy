import React from "react";
import { Link } from "react-router-dom";
import "../styles/Overview.css";
import "../styles/Footer.css";
import Footer  from "../components/Footer";

function Overview() {
  const monthlyIncome = 50000;
  const totalExpenses = 32000;
  const totalSavings = 15000;
  const remainingSalary = monthlyIncome - totalExpenses;

  const getCardClass = (value, type) => {
    if (type === "expenses" && value > monthlyIncome * 0.7) return "card red";
    if (type === "savings" && value >= monthlyIncome * 0.2) return "card green";
    if (type === "remaining" && value < 5000) return "card red";
    return "card blue";
  };

  return (
    <div className="overview-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* ✅ Card Row */}
      <div className="card-row" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        <Link to="/dashboard/monthly-chart" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="card blue" align="center">
            <h3>📊 Monthly Chart</h3>
          </div>
        </Link>

        <Link to="/dashboard/totalexpenses" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={getCardClass(totalExpenses, "expenses")} align="center">
            <h3>💳 Total Expenses</h3>
          </div>
        </Link>
      </div>

      {/* 🌟 About BudgetBuddy Section */}
      <div
        className="about-budgetbuddy"
        style={{
          marginTop: "40px",
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          borderRadius: "12px",
          padding: "25px 20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "700px",
          width: "90%",
        }}
      >
        <h2 style={{ color: "#00796b", marginBottom: "10px" }}>
          💡 What is BudgetBuddy?
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6", fontSize: "16px", marginBottom: "10px" }}>
          <strong>BudgetBuddy</strong> is your personal AI-powered finance
          companion. It helps you track income, manage expenses, and make
          smarter spending decisions effortlessly.
        </p>
        <p style={{ color: "#444", fontSize: "15px", lineHeight: "1.6", marginBottom: "15px" }}>
          With real-time insights, spending predictions, and a clean visual
          dashboard, BudgetBuddy transforms your financial habits — helping you
          stay <strong>aware, in control, and stress-free</strong> every month.
        </p>
        <p style={{ color: "#555", fontStyle: "italic" }}>
          🚀 “Track smarter. Save better. Live confidently.” 🌿
        </p>
      </div>
    </div>
  );
}

export default Overview;
