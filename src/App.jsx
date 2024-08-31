import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Popup from "./comps/LoginPopup";
import PlayerProfile from "./comps/PlayerProfile";
import "./styles.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [player, setPlayer] = useState(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLoadProfile = (playerData) => {
    setPlayer(playerData);
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      <h1>Golf Player Profile</h1>
      <button className="login-button" onClick={handleOpenPopup}>
        <FaLock />
      </button>
      {isPopupOpen && (
        <Popup onClose={handleClosePopup} onLoadProfile={handleLoadProfile} />
      )}
      {player && <PlayerProfile player={player} />}
    </div>
  );
}

export default App;
