import React from "react";
import Sidebar from "../components/Sidebar";

function About() {
  return (
    <section style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#fdfdfd",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      lineHeight: "1.6"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#4e8cff",
        marginBottom: "20px",
        fontWeight: "700",
        fontSize: "2.5rem"
      }}>
        About BudgetBuddy
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        BudgetBuddy is your friendly personal finance companion designed to help you take charge of your money. Whether you're tracking expenses, planning your savings, or exploring your financial habits, BudgetBuddy makes managing your finances simple and effective.
      </p>

      <h2 style={{ color: "#34495e", marginBottom: "10px" }}>
        Our Mission
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "20px", fontStyle: "italic" }}>
        To empower everyone to achieve financial wellness through smart budgeting and insightful tools.
      </p>

      <h2 style={{ color: "#34495e", marginBottom: "10px" }}>
        Why Choose BudgetBuddy?
      </h2>
      <ul style={{ fontSize: "1.1rem", marginLeft: "20px", marginBottom: "30px" }}>
        <li>✅ Easy expense tracking to know where your money goes.</li>
        <li>✅ Set and reach your savings goals with confidence.</li>
        <li>✅ Receive smart alerts and reminders tailored for you.</li>
        <li>✅ Visual reports that turn numbers into insights.</li>
      </ul>

      <div style={{ textAlign: "center" }}>
        <a href="/dashboard" style={{ textDecoration: "none" }}>
          <button style={{
            padding: "12px 40px",
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#fff",
            backgroundColor: "#4e8cff",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(78, 140, 255, 0.6)",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#3a69d8"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#4e8cff"}>
            Get Started with BudgetBuddy
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
