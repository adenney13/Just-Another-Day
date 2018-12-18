// build out game board and characters
const $gameField = document.querySelector(".gamefield");
const $smileFace = document.querySelector(".smileface");

//placeYOU
const smileFace = {
	x: 0, y: 0
};

//place bad guys
const sadGuys = [
	{ x: 9, y: 0},
	{ x: 9, y: 1},
	{ x: 7, y: 2},
	{ x: 9, y: 3}
];

//place home
const targets = [
	{x: 10, y: 2},
];

//build bad guys 
function renderSadGuys(){
	for (let sadGuy of sadGuys){
		const div = document.createElement("div");
		div.classList.add('sadface');
		div.style.top = (sadGuy.y * 100).toString() + 'px';
		div.style.left = (sadGuy.x * 100).toString() + 'px';
		$gameField.appendChild(div);
	};
	// let sadGuyMove = function(sadGuy) {
	// 	div.style.left = Math.random() * window.innerWidth + 'px';
 //    	div.style.top = Math.random() * window.innerHeight + 'px';
	// }
	//  setInterval(function() {
 //    sadGuyMove()}, 1000);
};

//build home
function renderTarget() {
	for (let target of targets) {
		const div = document.createElement("div");
		div.classList.add('target');
		div.style.top = (target.y * 100).toString() + 'px';
		div.style.left = (target.x * 100).toString() + 'px';
		$gameField.appendChild(div);
	};
};

const isCoordinateInGrid = function (x,y) {
	if(x <0 || y < 0 || x > 10 || y > 3) {
		return false
	} else {
		return true
	}
}

// const isThereASadGuy = function (x, y) {
// 	for (let sadGuy of sadGuys) {
// 		if(sadGuy.x === x && sadGuy.y === y){
// 			return true
// 		}
// 	}		return false
// }

const canMoveTo = (x,y) => {
	if (isCoordinateInGrid(x,y)){
		return true};
	}
// 	if (isThereASadGuy(x,y)){
// 		return false};
// 	return true
// }

const checkForWin = function() {
	for (let target of targets) {
		if (smileFace.x === target.x && smileFace.y === target.y) {
		alert("WIN!");
		}
	}
}

const checkForLoss = function () {
	for (let sadGuy of sadGuys) {
		if(smileFace.x === sadGuy.x && smileFace.y === sadGuy.y) {
			alert("DEAD");
		}
	}
}

// 	if (smileFace.x === sadGuys[0].x && smileFace.y === sadGuys[0].y) {
// 		alert("DEAD");
// 	} else if (smileFace.x === sadGuys[1].x && smileFace.y === sadGuys[1].y) {
// 		alert("Dead");
// 	} else if (smileFace.x === sadGuys[2].x && smileFace.y === sadGuys[2].y) {
// 		alert("Dead");
// 	} else if (smileFace.x === sadGuys[3].x && smileFace.y === sadGuys[3].y) {
// 		alert("Dead");
// 	}
// }



// Assign keys to movement of smileFace
let moveSmileFaceTo = (x,y) => {
	console.log(`Character moved to ${x}, ${y}`)
	$smileFace.style.left = (x*100).toString() + "px";
	$smileFace.style.top = (y*100).toString() + "px";
	// if (getIndexOfTarget(x,y)<0) return;
	// if (getIndexOfTarget(x,y)>=0) {
	// 	removePlantAt(getIndexOfPlantAt(x,y))
	checkForWin();
	checkForLoss();
	console.log(checkForLoss(), 'moveSMileFaceTo');
	};

const moveLeft = function () {
	if (canMoveTo(smileFace.x -1, smileFace.y)){
		smileFace.x -= 1}
		moveSmileFaceTo(smileFace.x, smileFace.y)
	}

const moveUp = function () {
	if (canMoveTo(smileFace.x, smileFace.y - 1)){
		smileFace.y -= 1}
		moveSmileFaceTo(smileFace.x, smileFace.y)
	}
const moveRight = function () {
	if (canMoveTo(smileFace.x +1, smileFace.y)){
		smileFace.x += 1}
		moveSmileFaceTo(smileFace.x, smileFace.y)
	}

const moveDown = function () {
	if (canMoveTo(smileFace.x, smileFace.y +1)){
		smileFace.y += 1}
		moveSmileFaceTo(smileFace.x, smileFace.y)
	}

document.body.addEventListener('keydown', evnt => {
	const numKey = evnt.keyCode;
	if ([37, 38, 39, 40].includes(numKey)) {
		evnt.preventDefault();
	}
	switch(numKey) {
		case 37:
			moveLeft();
			break;
		case 38:
			moveUp();
			break;
		case 39:
			moveRight();
			break;
		case 40:
			moveDown();
			break;
	}
});



//run the game
function runGame() {
	renderSadGuys();
	renderTarget();
}
	
runGame()
