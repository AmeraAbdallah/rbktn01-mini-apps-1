function Game(playerX, playerY){

  this.playerX = playerX;
  this.playerY = playerY;
  this.turn = playerX;
  this.lastWinner = null;
}

Game.prototype.setLastWinner = (player) => {
  this.lastWinner = payer;
}