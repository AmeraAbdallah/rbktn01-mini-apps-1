class Board{

  costructor(){
  }

  createBoard = () => {
    let board = document.createElement('table');
    for(let i = 0; i < 3; i ++){
      let row = document.createElement('tr');
      for(let j = 0; j < 3; j++){
        let col = document.createElement('td');
        let txtNode = document.createTextNode('0');
        col.appendChild(txtNode);
        col.setAttribute('data-index', `${i}${j}`);
        row.appendChild(col);
      }
      board.appendChild(row);
    }
    document.getElementById('board').appendChild(board);
  }

}