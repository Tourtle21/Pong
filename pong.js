var canvas = document.getElementById("myCanvas");


var ctx = canvas.getContext("2d");
setInterval(draw, 10);
var check = true
var hi = 400;
var hello = 20;
var r = 10;
var x = canvas.width/2;
var y = canvas.height -100;
var dx = 1;
var dy = -1;
var dxPaddle = 1;
var paddlex = 210
var paddley = 310;

var barx = [];
var bary = [];
var paddleHeight = 10;
var paddleWidth = 75;



var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(k) {
	if (k.keyCode == 37) {
		leftPressed = true;

	}
	if(k.keyCode == 39) {
		rightPressed = true;
	}
}





function keyUpHandler(k) {
	if (k.keyCode == 37) {
		leftPressed = false;
	}
	if(k.keyCode == 39) {
		rightPressed = false;
	}
}




function draw() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	if (check == true) {
		buildBars();
	}
	checkBars();
	drawPaddle()
	draw_ball()
	x = x + dx;
	y = y + dy;


	if (0 + r == y || (canvas.height - 10 - r == y && (x > paddlex && x < paddleWidth + paddlex))) {
		dy = -dy;
	}
	if (0 + r == x || canvas.width - r == x) {
		dx = -dx;
		clear_bar(hi, hello);
	}
	if(leftPressed && paddlex > 0) {
		paddlex += -dxPaddle;
	}
	if(rightPressed && paddlex < canvas.width - paddleWidth) {
		paddlex += dxPaddle;
	}
	if(rightPressed == false) {
		paddlex += 0
	}
	if(leftPressed == false) {
		paddlex +=0
	}
	if (y == canvas.height) {
		alert("you just got powned")
		location.reload();
	}
	for (var a = barx.length - 1; a >= 0; a--) {
		if (barx[a] < x && x < barx[a] + 50 && y < bary[a] && y > bary[a]-2) {
			dy = -dy;
			delete barx[a];
		}
	};


}
function draw_ball() {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI *2)
	ctx.fillStyle = "rgb(0, 0, 0)"
	ctx.fill();
	ctx.closePath();
}
function clear_bar(w, z) {
	ctx.clearRect(w, z, 50, 10)
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddlex, paddley, paddleWidth, paddleHeight);
	ctx.fillStyle = "rgb(10, 250,  100)"
	ctx.fill();
	ctx.closePath();
}
function buildBars(){
	for (var n =  6; n >= 0; n--) {
		for (var i = 6; i >= 0; i--) {

		barx.push(hi)
		bary.push(hello)
		hi -= 60
		};
		hi = 400
		hello += 20;
	}
	console.log(barx)
	console.log(bary)
	check = false;
}
function checkBars() {
	for (var n =  6; n >= 0; n--) {
		for (var i = barx.length; i >= 0; i--) {
			ctx.beginPath();
			ctx.rect(barx[i], bary[i], 50, 10);
			ctx.fillStyle = "rgb(10, 250,  255)"
			ctx.fill();
			ctx.closePath();
		};
	};
}
