import express from "express";
import axios from "axios";

const router = express.Router();

// POST /api/predict
router.post("/", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:5001/predict", req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error calling Python API:", error.message);
    res.status(500).json({ error: "Failed to get prediction" });
  }
});

export default router;
