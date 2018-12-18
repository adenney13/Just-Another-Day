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
	{ x: 9, y: 2},
	{ x: 9, y: 3}
];

//place home
const targets = [{
	x: 10, y: 2
}];

//build bad guys 
function renderSadGuys(){
	for (let sadGuy of sadGuys){
		const div = document.createElement("div");
		div.classList.add('sadface');
		div.style.top = (sadGuy.y * 100).toString() + 'px';
		div.style.left = (sadGuy.x * 100).toString() + 'px';
		$gameField.appendChild(div);
	};
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


document.body.addEventListener('keystroke', evnt =>{
	const numKey = evnt.keyCode;
	if ([37, 38, 39, 40].includes(numKey)){
		evnt.preventDefault();
	}
})



renderTarget();

function runGame() {
	renderSadGuys();
	
}

runGame()