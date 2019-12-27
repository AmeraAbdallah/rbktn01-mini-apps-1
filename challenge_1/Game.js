function Game(playerX, playerO){

  this.playerX = playerX;
  this.playerO = playerO;
  this.turn = playerX;
  this.lastWinner = null;
}

Game.prototype.setLastWinner = function(player){
  this.lastWinner = payer;
}

Game.prototype.switchTurn = function(){
  this.turn = (this.turn === this.playerX) ? this.playerO : this.playerX;
}

Game.prototype.play = function(index){
  document.getElementById(index).textContent = this.turn.element;
}