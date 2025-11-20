import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile(res.data.user))
      .catch((err) => console.error(err));
  }, []);

  if (!localStorage.getItem("token")) {
    return <p style={{ textAlign: "center" }}>Please login to view your profile.</p>;
  }

  if (!profile) {
    return <p style={{ textAlign: "center" }}>Loading your profile details...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>👤 Your Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Designation:</strong> {profile.designation}</p>
      <p><strong>Company:</strong> {profile.company}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "600px",
    margin: "50px auto",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
};

export default Profile;
