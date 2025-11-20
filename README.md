# BudgetBuddy
# Expense Based Lifestyle Recommender
BudgetBuddy is a machine learning based expense analysis tool that recommends lifestyle categories based on user spending patterns. It helps users understand their financial behavior through data insights and visualizations.
Built with Python, Scikit-learn, Pandas, the project transforms raw financial data into meaningful insights and personalized recommendations.
BudgetBuddy aims to simplify financial decision-making and promote better money management through data-driven intelligence.
# Features
💰 Smart expense pattern analysis using machine learning
Automatically identifies spending behavior and categorizes user expenses.

📊 Real-time data visualization
Interactive charts and insights built using Matplotlib / Power BI to help users understand their financial habits.

🤖 ML powered lifestyle recommendation system
Uses scikit-learn models (Random Forest / Gradient Boosting) to suggest suitable lifestyle categories based on expense inputs.

📝 User-friendly data input interface
A clean and interactive Streamlit web app for entering expenses and viewing results instantly.

📁 Automated preprocessing and feature engineering
Handles cleaning, encoding, and scaling of expense data to improve model accuracy.

⚡ Instant prediction and feedback
Shows the recommended lifestyle category in real time to support better financial decision-making.

# Project Structure
budgetbuddy/
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── Footer.js
│       │   ├── Header.js
│       │   ├── Overview.js
│       │   └── Sidebar.js
│       │
│       ├── pages/
│       │   ├── About.js
│       │   ├── Contact.js
│       │   ├── Dashboard.js
│       │   ├── DashboardLayout.js
│       │   ├── Home.js
│       │   ├── Login.js
│       │   ├── Logout.js
│       │   ├── MonthlyChart.js
│       │   ├── Predict.js
│       │   ├── Profile.js
│       │   ├── Savings.js
│       │   ├── Signup.js
│       │   └── Totalexpenses.js
│       │
│       ├── styles/
│       │   ├── Dashboard.css
│       │   ├── Footer.css
│       │   ├── global.css
│       │   ├── Header.css
│       │   ├── Home.css
│       │   ├── MonthlyChart.css
│       │   ├── Overview.css
│       │   ├── Pages.css
│       │   └── Sidebar.css
│       │
│       └── (other usual React files)
│           ├── App.js
│           ├── index.js
│           ├── package.json
│           └── package-lock.json
│
│
├── server/
│   ├── backend/
│   │   ├── node_modules/
│   │   ├── budgetbuddy_le_features.pkl
│   │   ├── budgetbuddy_le_target.pkl
│   │   ├── budgetbuddy_lgbm_model.pkl
│   │   ├── budgetbuddy_scaler.pkl
│   │   ├── model_api.py
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── models/
│   │   ├── Expense.js
│   │   └── Profile.js
│   │
│   └── (other backend files—if any)
│
└── README.md (you can add)
