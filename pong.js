var canvas = document.getElementById("myCanvas");

number = Math.random() - 1 + Math.random()
var ctx = canvas.getContext("2d");
setInterval(draw, 0);
var check = true
var hi = 565;
var hello = 30;
var r = 10;
var x = canvas.width/2;
var y = canvas.height -100;
var dx = number;
var X = 400;
var Y = 400;
var dY = 1.5
var dX = -0.25
var dy = 1;
var dxPaddle = 3;
var paddley = canvas.height - 15;
var powerup = false;
var powerupXY = [];
var barx = [];
var bary = [];
var paddleHeight = 10;
var paddleWidth = 75;
var points = 0;
var paddlex = (canvas.width / 2) - (paddleWidth / 2);
var time = 0
var color = ""
var breakBar = true;
var changeDirections = true;
var dialation = false;
var rightPressed = false;
var leftPressed = false;
var ballTwo = false;
var grow = true;
var ballColor = false;
var rainbow = false;
var colorBall = "rgb(0, 0, 0)"
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(k) {
	if (k.keyCode == 37) {
		leftPressed = true;

	}
	if(k.keyCode == 39) {
		rightPressed = true;
	}
	console.log(k.keyCode)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
	movePaddle();
=======
>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91
	if (powerup) {
		powerUp();
	}
	if (ballTwo) {
		draw_ballTwo();
		checkHitTwo();
	}
	if (dialation) {
		if (grow) {
				r += 0.25;
		}
		if (r > 50) {
			grow = false;
		}
		if (grow == false) {
			r-=0.25
		}
		if (r < 0.25) {
			grow = true;
		}
	}

	if (ballColor) {
		changeColor(colorBall);
	}
	if (rainbow) {
		changeColor(color)
	}
	breakBlocks();
<<<<<<< HEAD
=======
>>>>>>> Powerups
>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91
	checkHit();
	movePaddle();
	checkBars();
	drawPaddle()
	draw_ball()

	document.getElementById("points").innerHTML = "Score: " + points
	if (ballTwo){
		X = X + dX;
		Y = Y + dY;
	}
	x = x + dx;
	y = y + dy;

	if (points >= 6030) {
		alert("YOU WON")
	}

	if (Y > canvas.height) {
		Y = 1;
		ballTwo = false;
		powerup = false;
		powerupXY = [];
		time = 0;

<<<<<<< HEAD
	}
	if (y > canvas.height) {
		if (paddlex <= x && paddlex + paddleWidth >= x && dx > 0) {
			dy = -dy;
			dx = dx - 0.5;
		}
		if (paddlex <= x && paddlex + paddleWidth >= x && dx < 0) {
			dy = -dy;
			dx = dx + 0.5;
		}
		else {
			alert("you just got pwnd")
			location.reload();
		}
	}



}
function breakBlocks() {
	for (var a = barx.length - 1; a >= 0; a--) {
		if (barx[a] < x + r  && x - r < barx[a] + 50 && y - r - 15 < bary[a] && y - r - 15 > bary[a] - 30){
			if (changeDirections) {
				dy = -dy;
			}
			powerupXY.push(barx[a])
			powerupXY.push(bary[a])
			if (breakBar) {
				delete barx[a];
				points += Math.abs(200 - bary[a])
			}
			if (ballColor == false) {
				changeColor(color);
				powerup = true;
			}
		}
	if (barx[a] < X + r  && X - r < barx[a] + 50 && Y - r - 15 < bary[a] && Y - r - 15 > bary[a] - 30) {
		dY = -dY;
		delete barx[a];
		points += Math.abs(200 - bary[a])
	}


=======
	}
	if (y > canvas.height) {
		if (paddlex <= x && paddlex + paddleWidth >= x && dx > 0) {
			dy = -dy;
			dx = dx - 0.5;
		}
		if (paddlex <= x && paddlex + paddleWidth >= x && dx < 0) {
			dy = -dy;
			dx = dx + 0.5;
		}
		else {
			alert("you just got pwnd")
			location.reload();
		}
	}



}
function breakBlocks() {
	for (var a = barx.length - 1; a >= 0; a--) {
<<<<<<< HEAD
		if (barx[a] < x - r  && x - r < barx[a] + 50 && y - r - 15 < bary[a] && y - r - 15 > bary[a] - 30) {
			dy = -dy;
			delete barx[a];
=======
		if (barx[a] < x + r  && x - r < barx[a] + 50 && y - r - 15 < bary[a] && y - r - 15 > bary[a] - 30){
			if (changeDirections) {
				dy = -dy;
			}
			powerupXY.push(barx[a])
			powerupXY.push(bary[a])
			if (breakBar) {
				delete barx[a];
				points += Math.abs(200 - bary[a])
			}
			if (ballColor == false) {
				changeColor(color);
				powerup = true;
			}
		}
	if (barx[a] < X + r  && X - r < barx[a] + 50 && Y - r - 15 < bary[a] && Y - r - 15 > bary[a] - 30) {
		dY = -dY;
		delete barx[a];
		points += Math.abs(200 - bary[a])
	}


>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91




<<<<<<< HEAD
=======
>>>>>>> Powerups
>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91
		}
	};

function draw_ball() {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI *2)
	ctx.fillStyle = colorBall
	ctx.fill();
	ctx.closePath();
}
function draw_ballTwo() {
	if (time < 3) {
			X = x;
			Y = y;
			dX = -dx;
			dY = -dy;
	}
	ctx.beginPath();
	ctx.arc(X, Y, r, 0, Math.PI *2)
	ctx.fillStyle = "rgb(255,165,0)"
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
	if (canvas.height - 12 - r < y && (x > paddlex && x < paddleWidth + paddlex && dx <= -1.5 && dy > 0)) {
		if (x > paddlex && x < paddlex + paddleWidth / 2){
		dy = -dy;
	}
	}
	if (canvas.height - 12 - r < y && (x > paddlex && x < paddleWidth + paddlex && dx >= 1.5 && dy > 0)) {
		if (x > paddlex + paddleWidth / 2 && x < paddlex + paddleWidth) {
		dy = -dy;
	}
	}
	else if (canvas.height - 15 - r < y && (x > paddlex && x < paddleWidth + paddlex)) {
		if (x >= paddlex && x <= paddlex + (paddleWidth / 5) && dx < 1.5 && dy > 0) {
			dy = -dy;
			dx = dx - 0.9;

		}

		if (x >= paddlex + (paddleWidth / 5)+1 && x <= paddlex + (paddleWidth / 5) * 2 && dx < 2 && dy > 0) {
			dy = -dy;
			dx = dx - 0.4;
		}

		if (x >= paddlex + (paddleWidth / 5) * 2 + 1 && x <= paddlex + (paddleWidth / 5) * 3 && dy > 0) {
			dy = -dy;
		}
		if (x >= paddlex + (paddleWidth / 5) * 3 + 1 && x <= paddlex + (paddleWidth / 5) * 4 && dx > -2 && dy > 0) {
			dy = -dy;
			dx = dx + 0.4;


		}
		if (x >= paddlex + (paddleWidth / 5) * 4 + 1 && x <= paddlex + paddleWidth && dx > -2 && dy > 0) {
			dy = -dy;
			dx = dx + 0.9;
		}

	}

	if (0 + r > x || canvas.width - r < x) {
		dx = -dx;
	}
}
function checkHitTwo() {
	if (0 + r > Y) {
		dY = -dY;
	}
	if (canvas.height - 12 - r < Y && (X > paddlex && X < paddleWidth + paddlex && dX <= -2 && dY > 0)) {
		if (X > paddlex && X < paddlex + paddleWidth / 2){
		dY = -dY;
	}
	}
	if (canvas.height - 12 - r < Y && (X > paddlex && X < paddleWidth + paddlex && dX >= 2 && dY > 0)) {
		if (X > paddlex + paddleWidth / 2 && X < paddlex + paddleWidth) {
		dY = -dY;
	}
	}
	else if (canvas.height - 15 - r < Y && (X > paddlex && X < paddleWidth + paddlex)) {
		if (X >= paddlex && X <= paddlex + (paddleWidth / 5) && dX < 1.5 && dY > 0) {
			dY = -dY;
			dX = dX - 0.9;

		}


		if (X >= paddlex + (paddleWidth / 5)+1 && X <= paddlex + (paddleWidth / 5) * 2 && dX < 1.5 && dY > 0) {
			dY = -dY;
			dX = dX - 0.4;
		}

		if (X >= paddlex + (paddleWidth / 5) * 2 + 1 && X <= paddlex + (paddleWidth / 5) * 3 && dY > 0) {
			dY = -dY;
		}
		if (X >= paddlex + (paddleWidth / 5) * 3 + 1 && X <= paddlex + (paddleWidth / 5) * 4 && dX > -1.5 && dY > 0) {
			dY = -dY;
			dX = dX + 0.4;


		}
		if (X >= paddlex + (paddleWidth / 5) * 4 + 1 && X <= paddlex + paddleWidth && dX > -1.5 && dY > 0) {
			dY = -dY;
			dX = dX + 0.9;
		}

	}

	if (0 + r > X || canvas.width - r < X) {
		dX = -dX;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91
function changeColor(c) {
	var random = Math.random();
	if (random < 0.167) {
		c = "rgb(255, 255, 255)"
	}
	if (random > 0.167 && random < 0.334) {
		c = "rgb(255, 0, 0)"
	}
	if (random > 0.334 && random < 0.501) {
		c = "rgb(0, 255, 0)"
	}
	if (random > 0.501 && random < 0.668) {
		c = "rgb(255,165,0)"
	}
	if (random > 0.668 && random < 0.835) {
		c = "rgb(8, 209, 204)"
	}
	if (random > 0.835) {
		rainbow = true;
	}
	if (ballColor) {
		colorBall = c;
	}
	if (ballColor == false) {
		color = c;
	}

}
function powerUp() {
	var random = Math.random();
	ctx.beginPath();
	ctx.arc(powerupXY[0] + 25, powerupXY[1] + 5,r, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
	powerupXY[1] += 1
	if (time > 0) {
		document.getElementById("time").innerHTML = "Time: " + Math.abs(Math.ceil(time/100)-10);
		time += 1;
	}
	if (canvas.height < powerupXY[1]) {
		powerupXY = [];
		powerup = false;
		rainbow = false;	
	}

	if (canvas.height - 12 - r < powerupXY[1] && (powerupXY[0] + 25 > paddlex && powerupXY[0] + 5 < paddleWidth + paddlex)) {
		rainbow = false;
		if (color == "rgb(255, 255, 255)" && random > 0.5) {
			powerupXY = [];
			paddleWidth *= 2;
			time += 1;
		}
		if (color == "rgb(255, 255, 255)" && random < 0.5) {
			powerupXY = [];
			paddleWidth /= 2;
			time += 1;
		}
		if (color == "rgb(255, 0, 0)" && random > 0.5) {
			if (dy > 0) {
				powerupXY = [];
				dy += 0.5
				time += 1;
			}
			else {
				powerupXY = [];
				dy -= 0.5
				time += 1;
			}
		}
		if (color == "rgb(255, 0, 0)" && random < 0.5) {
			if (dy > 0) {
				powerupXY = [];
				dy -= 0.5
				time+= 1;
			}
			else {
				powerupXY = [];
				dy += 0.5
				time+= 1;
			}
		}
		if (color == "rgb(0, 255, 0)" && random < 0.5) {
			breakBar = false;
			powerupXY = []
			time += 1;
		}
		if (color == "rgb(0, 255, 0)" && random > 0.5) {
			changeDirections = false;
			powerupXY = []
			time += 1;
		}
		if (color == "rgb(255,165,0)" && random > 0.5) {
			ballTwo = true;
			powerupXY = [];
			time += 1;
		}
		if (color == "rgb(255,165,0)" && random < 0.5) {
			dx = 0;
			dy = Math.abs(dy)
			powerupXY = [];
			time += 1;
		}
		if (color == "rgb(8, 209, 204)" && random < 0.5) {
			dialation = true;
			powerupXY = [];
			time +=1;
		}
		if (color == "rgb(8, 209, 204)" && random > 0.5) {
			ballColor = true;
			powerupXY = [];
			time +=1;
		}
		rainbow = false;
	}

	if (time >= 1000) {
		powerup = false;
		powerupXY = [];
		time = 0;
		if (paddleWidth > 75) {
			paddleWidth /= 2;
		}
		if (paddleWidth < 75) {
			paddleWidth *=2;
		}
		if (dy > 1 || dy < -1) {
			if (dy < 0) {
				dy += 0.5
			}
			if (dy > 0) {
				dy -= 0.5
			}
		}
		if (dy < 1 && dy > -1) {
			if (dy < 0) {
				dy -= 0.5
			}
			if (dy > 0) {
				dy += 0.5
			}
		}
		if (breakBar == false) {
			breakBar = true;
		}
		if (changeDirections == false) {
			changeDirections = true;
		}
		if (ballTwo) {
			ballTwo = false;
		}
		if (dialation) {
			r = 10;
			dialation = false;
		}
		if (ballColor) {
			ballColor = false;
		}
	}
}
<<<<<<< HEAD
=======
>>>>>>> Powerups
>>>>>>> aac215a2512f42c0836d6c0adb577cd77cc6ae91
