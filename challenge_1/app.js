let board;
let playerx;
let playero;
let game;

document.getElementById('start-btn').addEventListener('click', function(){

  let name1 = document.getElementById('player-one-inpt').value;
  let name2 = document.getElementById('player-two-inpt').value;
  if(name1 === '' || name2 === ''){
    return alert('please fill your names');
  }
  startNewGame(name1, name2);
  displayPlayersInfo(playerx, playero);

});