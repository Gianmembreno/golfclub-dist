import React, { useState } from "react";
import players from "../../data/playerData";
import "./LoginPopup.css";

function LoginPopup({ onClose, onLoadProfile, isLoggedIn }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const player = players.find((p) => p.username === username);
    if (player) {
      onLoadProfile(player);
    } else {
      alert("Player not found");
    }
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2 className="dialog-title">
            {isLoggedIn ? "Switch Account" : "Welcome back!"}
          </h2>
          <p className="dialog-description">
            {isLoggedIn
              ? "Enter the account name to switch."
              : "Enter your account name to login."}
          </p>
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        <form onSubmit={handleSubmit} className="dialog-body">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Account Name
            </label>
            <input
              id="username"
              className="form-input"
              placeholder="Enter your account name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="dialog-footer">
            <button type="submit" className="submit-button">
              {isLoggedIn ? "Switch Account" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
