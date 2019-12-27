class Player{
  constructor(name, element){
    this.name = name;
    this.element = element;
    this.points = 0;
  }

  addPoint = () => {
    return ++this.points;
  }
}