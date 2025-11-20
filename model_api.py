from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Base path
base = os.path.dirname(__file__)

# Load all model components
model = joblib.load(os.path.join(base, "budgetbuddy_lgbm_model.pkl"))
scaler = joblib.load(os.path.join(base, "budgetbuddy_scaler.pkl"))
le_target = joblib.load(os.path.join(base, "budgetbuddy_le_target.pkl"))
le_features = joblib.load(os.path.join(base, "budgetbuddy_le_features.pkl"))

# Define expected feature order
NUM_COLS = ["Monthly_Salary", "Amount", "Remaining_Salary"]
CAT_COLS = [
    "Category",
    "Payment_Method",
    "Micro_Saving_Option",
    "Mood",
    "Spending_Trigger",
    "Mood_After_Spending"
]
FEATURE_ORDER = NUM_COLS + CAT_COLS

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # ✅ Build DataFrame with exact feature order
        df = pd.DataFrame([data], columns=FEATURE_ORDER)

        # ✅ Encode categorical columns
        for col in CAT_COLS:
            le = le_features[col]
            val = df.at[0, col]

            # Handle unseen labels gracefully
            if val not in le.classes_:
                print(f"⚠️ Unseen label '{val}' in {col}, defaulting to first class")
                df.at[0, col] = le.classes_[0]

            df[col] = le.transform(df[col])

        # ✅ Scale numeric columns
        df[NUM_COLS] = scaler.transform(df[NUM_COLS])

        # ✅ Predict
        prediction = model.predict(df)
        decoded = le_target.inverse_transform(prediction)

        return jsonify({"prediction": decoded[0]})

    except Exception as e:
        print("❌ Prediction Error:", e)
        return jsonify({"error": str(e)}), 500


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
