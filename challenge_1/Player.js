
function Player(name, element) {
  this.name = name;
  this.element = element;
  this.points = 0;
}

Player.prototype.addPoint = function(){
  return ++this.points;
}