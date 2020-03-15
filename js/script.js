function createBrick(color) {
  // create a brick

  // create class, brick + space + color

  // add class to brick

  //give result back

}

function addBrickToWall(color, wallNumber) {
  // create id by combining wall- and number

  // define the wall element

  // build a new brick

  // add the brick to the correct wall

}

function removeBrickFromWall(color, wallNumber) {
  // create id by combining wall- and number

  // get wall by id
  var wall = document.getElementById(wallId);
  
  // delete brick from wall if it was not the last one
}

//Function: Get amount of stones
function getAmountStones(color) {
  //Get all stones by color
  var yellowStones = document.getElementsByClassName("brick-" + color);
  //Get lenght (number of items of stones)
  var amountYellowStones = yellowStones.length;
  //Give back amount of stones
  return amountYellowStones;
}

//Function: to create a label, if 1 stone = 1 steen, if more stones = 2 stenen
function makeLabel(amount){
  //if else
  // give back label
}

//Function: get biggest wall; 
function getBiggestWall(yellow, black, orange, blue) {

  // starten van het standpunt dat de gele muur de grootste is
  // use if/else to check the biggest wall

  // Give back the biggest wall

}

//Function: Get smallest wall
function getSmallestWall(yellow, black, orange, blue) {

  // starten van het standpunt dat de gele muur de kleinste is

  // Give back the smallest wall
}


//Get btn calculate, and check if clicked
var btnCalculate = document.getElementById('btnCalculate');
btnCalculate.onclick = function() {
  
  // calculate amount of yellow stones

  // set first label in a var

  // set text to label

  
  // calculate amount of black stones

  // set first label in a var

  // set text to label

  
  // calculate amount of orange stones

  // set first label in a var

  // set text to label

  
  // calculate amount of blue stones

  // set first label in a var

  // set text to label


  

  //Get biggest wall: getBiggestWall


  //Get smallest wall: getSmallestWall

  
  //Calculate cost of all the stones
  var costYellow;
  var costBlack;
  var costOrange;
  var costBlue;
  var costTotal;
  
  //Get element from DOM to add the cost result
  document.getElementById('cost-yellow').textContent = '€ ' + costYellow;
  //...
  
}



