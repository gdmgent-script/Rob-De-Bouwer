function createBrick(color) {
  // create a brick
  var brick = document.createElement('div');
  // create class, brick + space + color
  var brickClass = 'brick brick-' + color;
  // add class to brick
  brick.className = brickClass;
  
  return brick;  
}

function addBrickToWall(color, wallNumber) {
  // create id by combining wall- and number
  var wallId = 'wall-' + wallNumber;
  // define the wall element
  var wall = document.getElementById(wallId);
  // build a new brick
  var brick = createBrick(color);
  // add the brick to the correct wall
  wall.appendChild(brick);
}

function removeBrickFromWall(color, wallNumber) {
  // create id by combining wall- and number
  var wallId = 'wall-' + wallNumber;
  // define the wall element
  var wall = document.getElementById(wallId);
  
  // build a new brick
  var bricks = document.getElementsByClassName("brick-"+color);
  if(bricks.length > 0)
    wall.removeChild(bricks[0]);
}

function getAmountStones(color) {
  var yellowStones = document.getElementsByClassName("brick-" + color);
  var amountYellowStones = yellowStones.length;
  return amountYellowStones;
}

function makeLabel(amount) {
  var stone = '';
  if(amount == 1) {
    stone = 'steen';
  }
  else {
    stone = 'stenen';
  }
  
  var label = amount + " " + stone;
  return label;
}

var btnCalculate = document.getElementById('btnCalculate');
btnCalculate.onclick = function() {
  
  // calculate amount of yellow stones
  var amountYellowStones = getAmountStones('yellow');
  // set first label in a var
  var lblWall = document.getElementById('wall-1-amountstones');
  // set text to label
  lblWall.textContent = makeLabel(amountYellowStones);
  
  // calculate amount of yellow stones
  var amountBlackStones = getAmountStones('black');
  // set first label in a var
  var lblWall = document.getElementById('wall-2-amountstones');
  // set text to label
  lblWall.textContent = makeLabel(amountBlackStones);
  
  // calculate amount of yellow stones
  var amountOrangeStones = getAmountStones('orange');
  // set first label in a var
  var lblWall = document.getElementById('wall-3-amountstones');
  // set text to label
  lblWall.textContent = makeLabel(amountOrangeStones);
  
  // calculate amount of yellow stones
  var amountBlueStones = getAmountStones('blue');
  // set first label in a var
  var lblWall = document.getElementById('wall-4-amountstones');
  // set text to label
  lblWall.textContent = makeLabel(amountBlueStones);
  








  // biggest wall
  var lblBiggest = document.getElementById('wall-biggest');
  lblBiggest.textContent = getBiggestWall(amountYellowStones, amountBlackStones, amountOrangeStones, amountBlueStones);
  












  // smallest wall
  var lblSmallest = document.getElementById('wall-smallest');
  lblSmallest.textContent = getSmallestWall(amountYellowStones, amountBlackStones, amountOrangeStones, amountBlueStones);
  
  var costYellow = 2 * amountYellowStones; 
  var costBlack = 7.5 * amountBlackStones;
  var costOrange = 9 * amountOrangeStones;
  var costBlue = 0.3 * amountBlueStones;
  var costTotal = costYellow + costBlack + costOrange + costBlue;
  
  document.getElementById('cost-yellow').textContent = '€ ' + costYellow;
  document.getElementById('cost-black').textContent = '€ ' + costBlack;
  document.getElementById('cost-orange').textContent = '€ ' + costOrange;
  document.getElementById('cost-blue').textContent = '€ ' + costBlue;
  document.getElementById('cost-total').textContent = '€ ' + costTotal;
  
}


function getBiggestWall(yellow, black, orange, blue) {

  // starten van het standpunt dat de gele muur de grootste is
  var max = yellow;
  var maxWallString = "Muur 1";

  if(max < black) {
    max = black;
    maxWallString = "Muur 2";
  }
  else if(max < orange) {
    max = orange;
    maxWallString = "Muur 3";
  }
  else if(max < blue) {
    max = blue;
    maxWallString = "Muur 4";
  }
  else if(max == black || max == orange || max == blue) {
    maxWallString = "Meer dan 1 grootste muur";
  } 
  else if(yellow == black && black == orange && orange == blue) {
    maxWallString = "Alle muren zijn exact even groot";
  }

  return maxWallString;
}


function getSmallestWall(yellow, black, orange, blue) {

  // starten van het standpunt dat de gele muur de grootste is
  var min = yellow;
  var minWallString = "Muur 1";

  if(min > black) {
    min = black;
    minWallString = "Muur 2";
  }
  else if(min > orange) {
    min = orange;
    minWallString = "Muur 3";
  }
  else if(max > blue) {
    min = blue;
    minWallString = "Muur 4";
  }
  else if(min == black ||min == orange || min == blue) {
    minWallString = "Meer dan 1 grootste muur";
  } 
  else if(yellow == black && black == orange && orange == blue) {
    minWallString = "Alle muren zijn exact even groot";
  }

  return minWallString;
}

























/*

function getBiggestWall(yellow, black, orange, blue) {
  var max = yellow;
  var maxWall = "Muur 1";
  
  if(max < black) {
    max = black;
    maxWall = 'Muur 2';
  }
  else if(max < orange) {
    max = orange;
    maxWall = 'Muur 3';    
  }
  else if(max < blue) {
    max = blue;
    maxWall = 'Muur 4';
  }
  else if(yellow == black && black == orange && orange == blue) {
    maxWall = "Allemaal even groot";
  }
  // bijkomende voorwaarde als er meer dan 1 grootste muur is (vb 2 identieke grootste muren)
  else if(max == black || max == orange || max == blue) {
    maxWall = "Er is meer dan 1 grootste muur";
  }
  
   return maxWall;
}*/








/*
function getSmallestWall(yel,bla,ora,blu) {
  var min = yel;
  var minWall = "Muur 1";
  
  if(min > bla) {
    min = bla;
    minWall = 'Muur 2';
  }
  if(min > ora) {
    min = ora;
    minWall = 'Muur 3';    
  }
  if(min > blu) {
    min = blu;
    minWall = 'Muur 4';
  }
  if(yel == bla && bla == ora && ora == blu) {
    minWall = "Allemaal even groot";
  }
  
   return minWall;
}*/