// Functions Covered: rotate(), translate(), scale(), push() = save, pop() = restore
// setTimeout() -> execute the code after some delay. Can make recurcive calls.
var canvas, button1, button2;
let rotateObjs = []
let israinbow = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	button1 = createButton('rainbow');
	button1.position(windowWidth/2+20, 20);
	button1.mousePressed(rainbow);
	button2 = createButton('reset');
	button2.position(windowWidth/2-60, 20);
	button2.mousePressed(reset);

	//style buttons
	button1.style('background-color', 'purple');
	button1.style('color', '#fff');
	button2.style('background-color', 'red');
	button2.style('color', '#fff');
	// canvas.style('z-index','-1'); // send it to back 
	background(100);
	rectMode(CENTER);
	ellipseMode(CENTER);
	angleMode(DEGREES);
}

function windowResized() {
	// print('resized!');
	resizeCanvas(windowWidth, windowHeight);
	background(100);
	button1.position(windowWidth/2+20, 20);
	button2.position(windowWidth/2-60, 20);
}

function draw() {

	background(0, 20);
	noStroke();


	var x = random(-5,5);
	var y = random(-5,5);

	for(var obj of rotateObjs){
		obj.update();
		obj.x += x;
		obj.y += y;
	}

}
function mouseMoved(){
	for(var obj of rotateObjs){
		obj.x = mouseX;
		obj.y = mouseY;
	}
}

function mousePressed() {
	for(var i = 0; i < 15 ; i++){
		setTimeout(rotateObjs.push(new RotateObj(mouseX, mouseY, random(360), random(-5,5))), 1000);
	}
	// rotateObjs.push(new RotateObj(mouseX, mouseY, random(360), random(-5,5)));
}

function reset(){
	rotateObjs = [];
}

function rainbow(){
	israinbow = !israinbow;
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
		if(israinbow){
			fill(random(255),random(255),random(255));
		}
		else{
			fill(random(256));
		}
		rect(0, 0, this.angle, this.speed);
		pop();
		this.angle += this.speed;
	}
}