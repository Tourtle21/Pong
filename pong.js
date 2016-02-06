var canvas = document.getElementById("myCanvas");

number = Math.random() - 1 + Math.random()
var ctx = canvas.getContext("2d");
setInterval(draw, 10);
var check = true
var hi = 565;
var hello = 30;
var r = 10;
var x = canvas.width/2;
var y = canvas.height -100;
var dx = number;
var dy = 3;
var dxPaddle = 3;
var paddley = canvas.height - 15;
var powerup = false;
var powerupXY = [];
var barx = [];
var bary = [];
var paddleHeight = 30;
var paddleWidth = 75;
var point = 0;
var paddlex = (canvas.width / 2) - (paddleWidth / 2);


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
	if (check) {
		buildBars();
	}
	if (powerup) {
		powerUp();
	}
	movePaddle();
	checkHit();
	checkBars();
	drawPaddle()
	draw_ball()
	x = x + dx;
	y = y + dy;




	if (y > canvas.height) {
		alert("you just got powned")
		location.reload();
	}
	for (var a = barx.length - 1; a >= 0; a--) {
		if (barx[a] < x - r  && x - r < barx[a] + 50 && y - r - 15 < bary[a] && y - r - 15 > bary[a] - 30) {
			dy = -dy;
			powerupXY.push(barx[a])
			powerupXY.push(bary[a])
			delete barx[a];
			powerup = true;

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

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddlex, paddley, paddleWidth, paddleHeight);
	ctx.fillStyle = "rgb(10, 250,  100)"
	ctx.fill();
	ctx.closePath();
}
function buildBars(){
	for (var n =  7; n >= 0; n--) {
		for (var i = 8; i >= 0; i--) {

		barx.push(hi)
		bary.push(hello)
		hi -= 70
		};
		hi = 565
		hello += 25;
	}

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
function checkHit() {
	if (0 + r > y) {
		dy = -dy;
	}
	if (canvas.height - 12 - r < y && (x > paddlex && x < paddleWidth + paddlex && dx <= -2 && dy > 0)) {
		if (x > paddlex && x < paddlex + paddleWidth / 2){
		dy = -dy;
	}
	}
	if (canvas.height - 12 - r < y && (x > paddlex && x < paddleWidth + paddlex && dx >= 2 && dy > 0)) {
		if (x > paddlex + paddleWidth / 2 && x < paddlex + paddleWidth) {
		dy = -dy;
	}
	}
	else if (canvas.height - 15 - r < y && (x > paddlex && x < paddleWidth + paddlex)) {
		if (x >= paddlex && x <= paddlex + (paddleWidth / 5) && dx < 2 && dy > 0) {
			dy = -dy;
			dx = dx - 1.15;

		}


		if (x >= paddlex + (paddleWidth / 5)+1 && x <= paddlex + (paddleWidth / 5) * 2 && dx < 2 && dy > 0) {
			dy = -dy;
			dx = dx - 0.62;
		}

		if (x >= paddlex + (paddleWidth / 5) * 2 + 1 && x <= paddlex + (paddleWidth / 5) * 3 && dy > 0) {
			dy = -dy;
		}
		if (x >= paddlex + (paddleWidth / 5) * 3 + 1 && x <= paddlex + (paddleWidth / 5) * 4 && dx > -2 && dy > 0) {
			dy = -dy;
			dx = dx + 0.63;


		}
		if (x >= paddlex + (paddleWidth / 5) * 4 + 1 && x <= paddlex + paddleWidth && dx > -2 && dy > 0) {
			dy = -dy;
			dx = dx + 1.14;
		}

	}

	if (0 + r > x || canvas.width - r < x) {
		dx = -dx;
	}
}
function movePaddle() {
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
}
function powerUp() {
	ctx.beginPath();
	ctx.arc(powerupXY[0] + 25, powerupXY[1] + 5,r, 0, Math.PI * 2);
	ctx.fillStyle = "rgb(255, 255,  255)"
	ctx.fill();
	ctx.closePath();
	powerupXY[1] += 2
}
