import React from "react";
import "./LandingPage.css";

function LandingPage({ onOptionClick }) {
  return (
    <div className="grid-container">
      <div
        className="card bg-primary"
        onClick={() => onOptionClick("DataAnalytics")}
      >
        <div className="card-content">
          <h3 className="card-title">Data Analytics</h3>
          <p className="card-description">
            Dive deep into your golf performance with our advanced analytics
            tools.
          </p>
          <button className="card-button">Explore Analytics</button>
        </div>
      </div>
      <div
        className="card bg-secondary"
        onClick={() => onOptionClick("RoundCollection")}
      >
        <div className="card-content">
          <h3 className="card-title">Round Collection</h3>
          <p className="card-description">
            Track and analyze your golf rounds with our comprehensive collection
            tool.
          </p>
          <button className="card-button">Manage Rounds</button>
        </div>
      </div>
      <div className="card bg-muted" onClick={() => onOptionClick("WITB")}>
        <div className="card-content">
          <h3 className="card-title">WITB</h3>
          <p className="card-description">
            Keep track of your golf bag and equipment with our WITB (What's In
            The Bag) tool.
          </p>
          <button className="card-button">Manage WITB</button>
        </div>
      </div>
      <div
        className="card bg-card"
        onClick={() => onOptionClick("SwingThoughts")}
      >
        <div className="card-content">
          <h3 className="card-title">Swing Thoughts</h3>
          <p className="card-description">
            Capture and review your swing thoughts to improve your game.
          </p>
          <button className="card-button">Manage Swing Thoughts</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
