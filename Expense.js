// models/Expense.js
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // To associate with logged-in user
  MonthlySalary: { type: Number, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  notes: { type: String },
  paymentMethod: { type: String, required: true },
});

module.exports = mongoose.model("Expense", ExpenseSchema);

<li
  key={index}
  style={{
    background: "#e0f2f1",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "8px",
  }}
>
  <strong>{exp.category}</strong> - ₹{exp.amount} on {exp.date}  
  {exp.notes && <em>(📝 {exp.notes})</em>}  
  <br />
  <span>💳 Payment: {exp.paymentMethod}</span>
</li>
