function createBrick(color) {
	// create a brick
	let brick = document.createElement("div");
	// create class, brick + space + color
	let brickClass = "brick brick-" + color;
	// add class to brick
	brick.className = brickClass;

	return brick;
}

function addBrickToWall(color, wallNumber) {
	// create id by combining wall- and number
	let wallId = "wall-" + wallNumber;
	// define the wall element
	let wall = document.getElementById(wallId);
	// build a new brick
	let brick = createBrick(color);
	// add the brick to the correct wall
	wall.appendChild(brick);
}

function removeBrickFromWall(color, wallNumber) {
	// create id by combining wall- and number
	let wallId = "wall-" + wallNumber;
	// define the wall element
	let wall = document.getElementById(wallId);

	// build a new brick
	let bricks = document.getElementsByClassName("brick-" + color);
	if (bricks.length > 0) wall.removeChild(bricks[0]);
}

function getAmountStones(color) {
	let yellowStones = document.getElementsByClassName("brick-" + color);
	let amountYellowStones = yellowStones.length;
	return amountYellowStones;
}

function makeLabel(amount) {
	let stone = "";
	if (amount == 1) {
		stone = "steen";
	} else {
		stone = "stenen";
	}

	let label = amount + " " + stone;
	return label;
}

let btnCalculate = document.getElementById("btnCalculate");
btnCalculate.onclick = function () {
	// calculate amount of yellow stones
	let amountYellowStones = getAmountStones("yellow");
	// set first label in a let
	let lblWall = document.getElementById("wall-1-amountstones");
	// set text to label
	lblWall.textContent = makeLabel(amountYellowStones);

	// calculate amount of yellow stones
	let amountBlackStones = getAmountStones("black");
	// set first label in a let
	let lblWall = document.getElementById("wall-2-amountstones");
	// set text to label
	lblWall.textContent = makeLabel(amountBlackStones);

	// calculate amount of yellow stones
	let amountOrangeStones = getAmountStones("orange");
	// set first label in a let
	let lblWall = document.getElementById("wall-3-amountstones");
	// set text to label
	lblWall.textContent = makeLabel(amountOrangeStones);

	// calculate amount of yellow stones
	let amountBlueStones = getAmountStones("blue");
	// set first label in a let
	let lblWall = document.getElementById("wall-4-amountstones");
	// set text to label
	lblWall.textContent = makeLabel(amountBlueStones);

	// biggest wall
	let lblBiggest = document.getElementById("wall-biggest");
	lblBiggest.textContent = getBiggestWall(
		amountYellowStones,
		amountBlackStones,
		amountOrangeStones,
		amountBlueStones
	);

	// smallest wall
	let lblSmallest = document.getElementById("wall-smallest");
	lblSmallest.textContent = getSmallestWall(
		amountYellowStones,
		amountBlackStones,
		amountOrangeStones,
		amountBlueStones
	);

	let costYellow = 2 * amountYellowStones;
	let costBlack = 7.5 * amountBlackStones;
	let costOrange = 9 * amountOrangeStones;
	let costBlue = 0.3 * amountBlueStones;
	let costTotal = costYellow + costBlack + costOrange + costBlue;

	document.getElementById("cost-yellow").textContent = "€ " + costYellow;
	document.getElementById("cost-black").textContent = "€ " + costBlack;
	document.getElementById("cost-orange").textContent = "€ " + costOrange;
	document.getElementById("cost-blue").textContent = "€ " + costBlue;
	document.getElementById("cost-total").textContent = "€ " + costTotal;
};

function getBiggestWall(yellow, black, orange, blue) {
	// starten van het standpunt dat de gele muur de grootste is
	let max = yellow;
	let maxWallString = "Muur 1";

	if (max < black) {
		max = black;
		maxWallString = "Muur 2";
	} else if (max < orange) {
		max = orange;
		maxWallString = "Muur 3";
	} else if (max < blue) {
		max = blue;
		maxWallString = "Muur 4";
	} else if (max == black || max == orange || max == blue) {
		maxWallString = "Meer dan 1 grootste muur";
	} else if (yellow == black && black == orange && orange == blue) {
		maxWallString = "Alle muren zijn exact even groot";
	}

	return maxWallString;
}

function getSmallestWall(yellow, black, orange, blue) {
	// starten van het standpunt dat de gele muur de grootste is
	let min = yellow;
	let minWallString = "Muur 1";

	if (min > black) {
		min = black;
		minWallString = "Muur 2";
	} else if (min > orange) {
		min = orange;
		minWallString = "Muur 3";
	} else if (max > blue) {
		min = blue;
		minWallString = "Muur 4";
	} else if (min == black || min == orange || min == blue) {
		minWallString = "Meer dan 1 grootste muur";
	} else if (yellow == black && black == orange && orange == blue) {
		minWallString = "Alle muren zijn exact even groot";
	}

	return minWallString;
}
