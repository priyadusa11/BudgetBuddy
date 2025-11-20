import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/budgetbuddy")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Dummy users for now (replace with real schema later)
const users = [{ email: "test@test.com", password: "123456" }];

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

  const Expense = require("./models/Expense");

// Get all expenses for a user
app.get("/expenses/:userId", async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.params.userId }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching expenses", error: err });
  }
});

// Add a new expense
app.post("/expenses", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ message: "Error adding expense", error: err });
  }
});

import axios from "axios";


app.post("/predict", async (req, res) => {
  try {
    // send request to Python Flask API
    const response = await axios.post("http://127.0.0.1:5001/predict", req.body);
    res.json(response.data);
  } catch (err) {
    console.error("Error calling Python API:", err.message);
    res.status(500).json({ message: "Prediction failed" });
  }
});



// Start server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000/dashboard/totalexpenses"));
