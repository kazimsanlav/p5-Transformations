// Functions Covered: rotate(), translate(), scale(), push() = save, pop() = restore
// setTimeout() -> execute the code after some delay. Can make recurcive calls.
var canvas;
let rotateObjs = []

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// canvas.style('z-index','-1'); // send it to back 
	background(100);
	rectMode(CENTER);
	angleMode(DEGREES);
}

function windowResized() {
	// print('resized!');
	resizeCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {

	background(0, 20);
	noStroke();

	//rect1
	// push();
	// translate(windowWidth / 2, windowHeight / 2);
	// rotate(angle);
	// fill(120);
	// rect(0, 0, 100, 10);
	// pop();

	// angle += 5;
	var x = random(-5,5);
	var y = random(-5,5);
	for(var obj of rotateObjs){
		obj.update();
		obj.x += x;
		obj.y += y;

	}
}
// function mouseMoved(){
// 	for(var obj of rotateObjs){
// 		obj.x = mouseX;
// 		obj.y = mouseY;
// 	}
// }

function mousePressed() {
	for(var i = 0; i < 15 ; i++){
		setTimeout(rotateObjs.push(new RotateObj(mouseX, mouseY, random(360), random(-5,5))), 1000);
	}
	// rotateObjs.push(new RotateObj(mouseX, mouseY, random(360), random(-5,5)));
}

function keyPressed(){
	rotateObjs = [];
}


class RotateObj{
	constructor(x, y, angle, speed) {
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.speed = speed;
		print(this);
	}

	update(){
		push();
		translate(this.x , this.y);
		rotate(this.angle);
		fill(random(255));
		rect(0, 0, this.angle, this.speed);
		pop();
		this.angle += this.speed;
	}
}