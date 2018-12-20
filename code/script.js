const $gameField = document.querySelector(".gamefield");
const $smileFace = document.querySelector(".smileface");

const smileFace = {
	x: 0, y: 0
};

const sadGuys = [
	{ x: 9, y: 0},
	{ x: 9, y: 1},
	{ x: 9, y: 2},
	{ x: 9, y: 3}
];

const targets = [
	{x: 10, y: 2},
];

let shuffledSadGuys = shuffle(sadGuys);

function renderSadGuys(){

	for (let i = 0; i < shuffledSadGuys.length; i++) {
		const div = document.createElement("div");
		div.classList.add('sadface');
		div.style.top = (shuffledSadGuys[i].y * 100).toString() + 'px';
		div.style.left = (shuffledSadGuys[i].x * 100).toString() + 'px';
		$gameField.appendChild(div);

		
		function sadGuyMove() {
			if (shuffledSadGuys[i].x > 0) {
				div.style.left = ((shuffledSadGuys[i].x -=1) * 100).toString() + 'px';
			}
			else {
				checkForLoss();	
				div.style.left = '0px';
			}
		}
		checkForLoss();	
		setInterval(sadGuyMove, Math.floor(Math.random() * Math.floor(3000)));
	}
}; 

function shuffle(arr) {
 	return arr.sort(() => .5 - Math.random());
};

function renderTarget() {
	for (let target of targets) {
		const div = document.createElement("div");
		div.classList.add('target');
		div.style.top = (target.y * 100).toString() + 'px';
		div.style.left =(target.x * 100).toString() + 'px';
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

const getIndexOfSadGuy = (x) => {
	return sadGuys.findIndex(sadGuy => sadGuy.x === x);
}

const canMoveTo = (x,y) => {
	if (isCoordinateInGrid(x,y)){
		return true
	}
}


const checkForWin = function() {
	for (let target of targets) {
		if (smileFace.x === target.x && smileFace.y === target.y) {
			window.location.href = "./winpage.html";
		}
	}
}

const checkForLoss = function () {
	for (let sadGuy of sadGuys) {
		if(smileFace.x === sadGuy.x && smileFace.y === sadGuy.y) {
			window.location.href = "./losepage.html";
		}
	}
}

let moveSmileFaceTo = (x,y) => {
	$smileFace.style.left = (x*100).toString() + "px";
	$smileFace.style.top = (y*100).toString() + "px";
	checkForWin();
	checkForLoss();
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



function runGame() {
	renderSadGuys();
	renderTarget();
}
	
runGame()
