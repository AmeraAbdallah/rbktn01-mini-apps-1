function Board() {

}

Board.prototype.createBoard = function(){
  let board = document.createElement('table');
  for(let i = 0; i < 3; i ++){
    let row = document.createElement('tr');
    for(let j = 0; j < 3; j++){
      let col = document.createElement('td');
      let txtNode = document.createTextNode('0');
      col.appendChild(txtNode);
      col.id = (`${i}${j}`);
      row.appendChild(col);
    }
    board.appendChild(row);
  }
  document.getElementById('board').appendChild(board);
}

Board.prototype.checkAvailble = function(index){
  return document.getElementById(index).innerText == 0;
}

Board.prototype.init = function(){
  for(let i = 0; i < 3; i ++){
    for(let j = 0; j < 3; j++){
      document.getElementById(`${i}${j}`).innerHTML = '0';
    }
  }
}