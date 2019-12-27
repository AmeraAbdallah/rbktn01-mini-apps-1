function Game(playerX, playerY){

  this.playerX = playerX;
  this.playerY = playerY;
  this.turn = playerX;
  this.lastWinner = null;
}

Game.prototype.setLastWinner = function(player){
  this.lastWinner = payer;
}

Game.prototype.switchTurn = function(){
  this.turn = (this.turn === this.playerX) ? this.playerY : this.playerX;
}

Game.prototype.play = function(index){
  document.getElementById(index).textContent = this.turn.element;
  this.switchTurn();
}