// build out game board and characters
const $gameField = document.querySelector(".gamefield");
const $smileFace = document.querySelector(".smileface");
// const $sadFace = document.querySelector(".sadface")

//placeYOU
const smileFace = {
	x: 0, y: 0
};

//place bad guys
const sadGuys = [
	{ x: 9, y: 0},
	{ x: 9, y: 1},
	{ x: 9, y: 2},
	{ x: 9, y: 3}
];

//place home
const targets = [
	{x: 10, y: 2},
];

let pos1 = 9;

let shuffledSadGuys = shuffle(sadGuys);
//build bad guys 
function renderSadGuys(){
	// for (let sadGuy of sadGuys){

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
				div.style.left = '0px';
			}

		}

		setInterval(sadGuyMove, Math.floor(Math.random() * Math.floor(3000)));

	}
		// function sadGuyStop() {
		// 	div.style.left= '0px';

		// }
		
			// function frame() {
			// if (getIndexOfSadGuy(sadGuys.x) === 0 + "px"){
			// 	sadGuyStop();
			// }
	

	
      	
 }; 

 function shuffle(arr) {
 	return arr.sort(() => 0.5 - Math.random());
 }

 // let sadGuyStarts = setInterval(() => {
	// 		let stop = false;
	// 		while (pos1 > 0 && stop === false) {
	// 			pos1--;
	// 			let bad = document.getElementsByClassName('sadface');
	// 			for (let i; i < bad.length; i++) {
	// 				bad[i].style.left = '-100px';
	// 			}
	// 			// sadGuys.x = pos1;
	// 			// document.querySelectorAll(".sadface").style.left = `${sadGuys.x}px`;
		
	// 			// if (pos1 === 0) {
	// 			// 	stop = true;
	// 			// 	document.querySelectorAll(".sadface").style.left = `${sadGuys.x}px`;
	// 			// }

	// 		}
	// 	}, 500); 	
	
// };




  // let elem = document.querySelector(".sadface");   
 	
  // let id = setInterval(frame()) 
  //   if (pos == 0) {
  //     clearInterval(id);
  //   } else {
  //     pos++; 
  //     elem.style.top = (sadGuys[0].y - pos) + "px";
  //     elem.style.left = (sadGuys[0].x - pos) + "px"; 
  //   } 1000;
  // }




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

const getIndexOfSadGuy = (x) => {
	return sadGuys.findIndex(sadGuy => sadGuy.x === x);
}

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
	
	// if (getIndexOfSadGuy(x,y)>=0) {
	// 	removePlantAt(getIndexOfPlantAt(x,y))
	checkForWin();
	// checkForLoss();}
	// console.log(checkForLoss(), 'moveSMileFaceTo');
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
	// sadGuyMove();
}
	
runGame()
