import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [features, setFeatures] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const res = await axios.post("http://localhost:3000/predict", {
        features: features.split(",").map(Number),
      });
      setResult(res.data.prediction);
    } catch (err) {
      alert("Prediction failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💰 BudgetBuddy Predictor</h2>
      <input
        type="text"
        placeholder="Enter features, e.g. 1.2, 3.4, 5.6, 7.8"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
      <button onClick={handlePredict}>Predict</button>
      {result && <h3>Prediction: {result}</h3>}
    </div>
  );
};

export default Predict;
