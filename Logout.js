import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // clear auth (if using JWT/localStorage)
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);

  return <h2>Logging out...</h2>;
}

export default Logout;
