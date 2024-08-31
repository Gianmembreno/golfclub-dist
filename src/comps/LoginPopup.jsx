import React, { useState } from "react";
import players from "../../data/playerData";

function LoginPopup({ onClose, onLoadProfile }) {
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
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="form-container">
          <h1 className="form-title">Player Profile</h1>
          <form onSubmit={handleSubmit} className="form-inputs">
            <input
              className="input-field"
              placeholder="Enter username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="load-button" type="submit">
              Load Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
