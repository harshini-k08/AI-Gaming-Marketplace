import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileMenu.css";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-menu">
      <button
        className="profile-btn"
        onClick={() => setOpen(!open)}
      >
        👤 Account
      </button>

      {open && (
        <div className="dropdown">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;