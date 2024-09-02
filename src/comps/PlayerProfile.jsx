import React from "react";

function PlayerProfile({ player }) {
  return (
    <div id="playerInfo" className="player-info">
      <table id="clubDistancesTable">
        <thead>
          <tr>
            <th>Club</th>
            <th>Distance (yards)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(player.clubDistances).map(([club, distance]) => (
            <tr key={club}>
              <td>{club}</td>
              <td>{distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerProfile;
