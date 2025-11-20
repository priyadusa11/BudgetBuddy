const express = require("express");
const Profile = require("../models/Profile");
const router = express.Router();

// Save profile
router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, designation, company, location, bio } = req.body;

    // Check if profile exists → update, else create
    let profile = await Profile.findOne({ email });

    if (profile) {
      profile.fullName = fullName;
      profile.phone = phone;
      profile.designation = designation;
      profile.company = company;
      profile.location = location;
      profile.bio = bio;
      await profile.save();
      res.json({ message: "Profile updated", profile });
    } else {
      const newProfile = new Profile({
        fullName,
        email,
        phone,
        designation,
        company,
        location,
        bio,
      });
      await newProfile.save();
      res.json({ message: "Profile created", profile: newProfile });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch profile by email
router.get("/:email", async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
