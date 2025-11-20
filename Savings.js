// src/pages/Savings.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Savings() {
  const [savingsData, setSavingsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/totalexpenses/Savings")
      .then((res) => res.json())
      .then((data) => {
        // Convert month number -> month name
        const monthNames = [
          "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
        ];
        const formatted = data.map((item) => ({
          month: monthNames[item.month - 1],
          savings: item.savings,
        }));
        setSavingsData(formatted);
      })
      .catch((err) => console.error("Error fetching savings:", err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="savings-container p-6"
    >
      <h2 className="text-2xl font-bold mb-4" align = "center">💰 Savings Overview</h2>
      <p className="mb-6" align = "center">Track your monthly savings (Salary - Expenses).</p>

      <div className="chart-container bg-white shadow-lg p-4 rounded-2xl" >
        <ResponsiveContainer width="70%" height={400}>
          <BarChart data={savingsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="savings" fill="#4CAF50" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default Savings;
