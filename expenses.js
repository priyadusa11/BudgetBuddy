// routes/expenses.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// 1️⃣ Create Expense Schema
const ExpenseSchema = new mongoose.Schema({
  MonthlySalary: { type: Number, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  notes: { type: String },
  paymentMethod: { type: String, required: true },
});

const Expense = mongoose.model("Expense", ExpenseSchema);

// 2️⃣ GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching expenses", error: err });
  }
});

// 3️⃣ POST a new expense
router.post("/", async (req, res) => {
  try {
    const { MonthlySalary, category, amount, date, notes, paymentMethod } = req.body;

    const newExpense = new Expense({
      MonthlySalary,
      category,
      amount,
      date,
      notes,
      paymentMethod,
    });

    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ message: "Error saving expense", error: err });
  }
});

module.exports = router;
