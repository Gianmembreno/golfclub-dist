import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginPopup from "./comps/LoginPopup";
import PlayerProfile from "./comps/PlayerProfile";
import LandingPage from "./comps/LandingPage";
import DataAnalytics from "./comps/DataAnalytics";
import SwingThoughts from "./comps/SwingThoughts";
import RoundCollection from "./comps/RoundCollection";
import Header from "./comps/Header";
import "./styles.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [pendingComponent, setPendingComponent] = useState(null);
  const [animationDirection, setAnimationDirection] = useState("");

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

  const handleNavigate = (direction) => {
    const components = [
      "DataAnalytics",
      "RoundCollection",
      "WITB",
      "SwingThoughts",
    ];
    const currentIndex = components.indexOf(selectedComponent);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % components.length
        : (currentIndex - 1 + components.length) % components.length;
    setAnimationDirection(direction);
    setSelectedComponent(components[nextIndex]);
  };

  return (
    <div className="container">
      {player && selectedComponent && (
        <Header
          selectedComponent={selectedComponent}
          animationDirection={animationDirection}
          handleNavigate={handleNavigate}
          handleOpenPopup={handleOpenPopup}
        />
      )}
      {!player ? (
        <LandingPage onOptionClick={handleOptionClick} />
      ) : (
        <>
          {selectedComponent === "DataAnalytics" && <DataAnalytics />}
          {selectedComponent === "RoundCollection" && <RoundCollection />}
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
