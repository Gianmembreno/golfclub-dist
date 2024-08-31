import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginPopup from "./comps/LoginPopup";
import PlayerProfile from "./comps/PlayerProfile";
import LandingPage from "./comps/LandingPage";
import DataAnalytics from "./comps/DataAnalytics";
import SwingThoughts from "./comps/SwingThoughts";
import "./styles.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [pendingComponent, setPendingComponent] = useState(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLoadProfile = (playerData) => {
    setPlayer(playerData);
    setIsPopupOpen(false);
    if (pendingComponent) {
      setSelectedComponent(pendingComponent);
      setPendingComponent(null);
    }
  };

  const handleOptionClick = (component) => {
    if (!player) {
      setPendingComponent(component);
      setIsPopupOpen(true);
    } else {
      setSelectedComponent(component);
    }
  };

  return (
    <div className="container">
      {!player ? (
        <LandingPage onOptionClick={handleOptionClick} />
      ) : (
        <>
          <div className="section-header">
            <button className="login-button" onClick={handleOpenPopup}>
              <FaUserCircle size={32} />
            </button>
          </div>
          {selectedComponent === "DataAnalytics" && <DataAnalytics />}
          {selectedComponent === "SwingThoughts" && <SwingThoughts />}
          {player && selectedComponent === "WITB" && (
            <PlayerProfile player={player} />
          )}
        </>
      )}
      {isPopupOpen && (
        <LoginPopup
          onClose={handleClosePopup}
          onLoadProfile={handleLoadProfile}
          isLoggedIn={!!player}
        />
      )}
    </div>
  );
}

export default App;
