
let setPlayerInfo = function(player, element){
  let playerElement = document.createElement('ul');
  let label = document.createElement('li');
  label.innerHTML = `player ${element}`;
  let playerName = document.createElement('li');
  playerName.innerHTML = player.name;
  let playerPoints = document.createElement('li');
  playerPoints.innerHTML = player.points;
  playerElement.appendChild(label);
  playerElement.appendChild(playerName);
  playerElement.appendChild(playerPoints);
  document.getElementById(`player${element}`).innerHTML = '';
  document.getElementById(`player${element}`).appendChild(playerElement);
}

let displayPlayersInfo = function(playerx, playero){
  setPlayerInfo(playerx, 'x');
  setPlayerInfo(playero, 'o');
}