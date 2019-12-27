let checkTie = function(){
  let tie = true;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(document.getElementById(`${i}${j}`).innerHTML == 0){
        tie = false;
      }
    }
  }
  return tie;
}