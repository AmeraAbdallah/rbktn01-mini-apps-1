//TODO: REFACTOR
let startNewGame = (name1, name2) => {

  board = new Board();
  playerx = new Player(name1, 'X');
  playero = new Player(name2, 'O');
  game = new Game(playerx, playero);

  board.createBoard();

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      document.getElementById(`${i}${j}`).addEventListener('click', event => {
        if(board.checkAvailble(event.target.id)){
          game.play(event.target.id);
          if(isWinner(event.target.id, game.turn.element)){
            game.turn.addPoint();
            displayPlayersInfo(playerx, playero);
            alert(`${game.turn.name} won.`)
            board.init();
            return;
          }
          if(checkTie()){
            alert(`Tie`);
            board.init();
            return;
          }
          game.switchTurn();
        }
      });
    }
  }
  document.getElementById('initialGame').innerHTML = '';
}