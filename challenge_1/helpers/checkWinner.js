let checkCell = (index, element) => {
  return element === document.getElementById(index).innerHTML;
}

let checkRow = (row, element) => {
  return checkCell(`${row}0`, element) && checkCell(`${row}1`, element) && checkCell(`${row}2`, element);
}

let checkCol = (col, element) => {
  return checkCell(`0${col}`, element) && checkCell(`1${col}`, element) && checkCell(`2${col}`, element);
}

let checkMajor = (element) => {
  return checkCell(`00`, element) && checkCell(`11`, element) && checkCell(`22`, element);
}

let checkMinor = (element) => {
  return checkCell(`02`, element) && checkCell(`11`, element) && checkCell(`20`, element);
}

let isWinner = (index, element) => {
  let row = index[0];
  let col = index[1];

  return checkRow(row, element) || checkCol(col, element) || checkMajor(element) || checkMinor(element);
}