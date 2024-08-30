import players from '../data/playerData.js';


document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('usernameInput').value;
    loadPlayerProfile(usernameInput);
});

function loadPlayerProfile(username) {
    const player = players.find(p => p.username === username);
    if (player) {
        document.getElementById('playerInfo').style.display = 'block';
        document.getElementById('username').textContent = player.username;
        document.getElementById('fullname').textContent = player.fullname;

        const clubDistancesTable = document.getElementById('clubDistancesTable').getElementsByTagName('tbody')[0];
        clubDistancesTable.innerHTML = ''; // Clear previous data

        for (const club in player.clubDistances) {
            const row = clubDistancesTable.insertRow();
            const clubCell = row.insertCell(0);
            const distanceCell = row.insertCell(1);
            clubCell.textContent = club;
            distanceCell.textContent = player.clubDistances[club];
        }
    } else {
        alert("Player not found");
        document.getElementById('playerInfo').style.display = 'none';
        document.getElementById('clubDistancesTable').getElementsByTagName('tbody')[0].innerHTML = ''; // Clear table
    }
}
