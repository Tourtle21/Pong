var canvas = document.getElementById("myCanvas");

number = Math.random() - 1 + Math.random()
numberTwo = Math.random() - 1 + Math.random()
var ctx = canvas.getContext("2d");
setInterval(draw,  10);
canvas.height = $(document).height() - 10;
var check = true;
var columns = 2;
var rows = 1;
var barW = 300;
var barH = 300;
var extra = 10
var finalOpening = barH + extra;
var openingTwo = 200;
var opening = barW + openingTwo;
var hi = 10
var start = 10
var hello = canvas.height / 2 - barH /2;
var r = 10;
var x = canvas.width/2;
var y = canvas.height -15;
var dx = number;
var X = canvas.width/2;
var Y = 15;
var dY = 2;
var dX = numberTwo;
var dy = 2;
var dxPaddle = 3;
var paddley = canvas.height - 15;
var paddleY = 0 + 15;
var barx = [];
var bary = [];
var paddleHeight = 10;
var paddleWidth = 75;
var points = 0;
var paddlex = (canvas.width / 2) - (paddleWidth / 2);
var paddleX = (canvas.width / 2) - (paddleWidth / 2);
var rightPressed = false;
var leftPressed = false;
var aPressed = false;
var dPressed = false;
var time = 0;
var blockNumber = 2;
var guess = 1;
var level = 2;
var row = true;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(k) {
	if (k.keyCode == 37) {
		leftPressed = true;

	}
	if(k.keyCode == 39) {
		rightPressed = true;
	}
	if(k.keyCode == 65) {
		aPressed = true;
	}
	if(k.keyCode == 68) {
		dPressed = true;
	}
}





function keyUpHandler(k) {
	if (k.keyCode == 37) {
		leftPressed = false;
	}
	if(k.keyCode == 39) {
		rightPressed = false;
	}
	if(k.keyCode == 65) {
		aPressed = false;
	}
	if(k.keyCode == 68) {
		dPressed = false;
	}
}




function draw() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	if (check) {
		buildBars();
	}
	draw_ballTwo();
	checkHitTwo();
	breakBlocks();
	checkHit();
	movePaddle();
	checkBars();
	drawPaddle()
	draw_ball()
	drawPaddleTwo();
	movePaddleTwo();
	document.getElementById("points").innerHTML = "Score: " + points
	X = X + dX;
	Y = Y + dY;
	x = x + dx;
	y = y + dy;


	if (y > canvas.height || Y > canvas.height || y < 0 || Y < 0) {
		time += 1;
		y = "hi"
		Y = "hi"
		document.getElementById("level").innerHTML = "Game Over"
	 }
 if (time >= 100) {
	 if (guess < level) {
		 location.reload();
		 time = 0;
	 }
	 else {
		level += 1;
		x = canvas.width/2;
		y = canvas.height -15;
		X = canvas.width/2;
		Y = 15;
		paddlex = (canvas.width / 2) - (paddleWidth / 2);
		paddleX = (canvas.width / 2) - (paddleWidth / 2);
		time = 0
	 }
 }
 if (time > 0) {
	 time += 1;
 }
if (blockNumber == 0){
	y="hi"
	Y="hi"
	guess += 1;
	document.getElementById("level").innerHTML = "Level " + level
	levelUp();

	blockNumber = barx.length
	time += 1;
}



function breakBlocks() {
	for (var a = barx.length - 1; a >= 0; a--) {
		if (barx[a] < x + r && barx[a] + 1 > x && y < bary[a] + barH && y > bary[a]){
				delete barx[a];
				dx = -dx;
				points += Math.abs(200 - bary[a])
				blockNumber -=1;
		}
		if (barx[a] + barW > x - r&& barx[a] + barW - 1 < x + r && y < bary[a] + barH && y > bary[a]) {
			delete barx[a];
			dx = -dx;
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
		if (barx[a] < x && barx[a] + barW > x && y < bary[a] + barH && y > bary[a]) {
			dy = -dy;
			delete barx[a];
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
		if (barx[a] < x && barx[a] + barW > x && y == bary[a]) {
			dy = -dy;
			delete barx[a];
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
		if (barx[a] < X + r && barx[a] + 1 > X && Y < bary[a] + barH && Y > bary[a]){
				delete barx[a];
				dX = -dX;
				points += Math.abs(200 - bary[a])
				blockNumber -=1;
		}
		if (barx[a] + barW > X - r && barx[a] + barW - 1 < X + r && Y < bary[a] + barH && Y > bary[a]) {
			delete barx[a];
			dX = -dX;
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
		if (barx[a] < X && barx[a] + barW > X  && Y < bary[a] + barH && Y > bary[a]) {
			dY = -dY;
			delete barx[a];
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
		if (barx[a] < X - r&& barx[a] + barW > X - r && Y == bary[a]) {
			dY = -dY;
			delete barx[a];
			points += Math.abs(200 - bary[a])
			blockNumber -=1;
		}
	}
}





};

function draw_ball() {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI *2)
	ctx.fillStyle = "rgb(255,255,255"
	ctx.fill();
	ctx.closePath();
}
function draw_ballTwo() {
	ctx.beginPath();
	ctx.arc(X, Y, r, 0, Math.PI *2)
	ctx.fillStyle = "rgb(255,255,255)"
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
function drawPaddleTwo() {
	ctx.beginPath();
	ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = "rgb(10, 250,  100)"
	ctx.fill();
	ctx.closePath();
}
function buildBars(){
	for (var n =  rows - 1; n >= 0; n--) {
		for (var i = columns - 1; i >= 0; i--) {

		barx.push(hi)
		bary.push(hello)
		hi += opening
		};
		hi = start;
		hello += finalOpening;
	}
	hello = canvas.height / 2 - 200;
	check = false;
	console.log(hello);
}
function checkBars() {
	for (var n =  6; n >= 0; n--) {
		for (var i = barx.length; i >= 0; i--) {
			ctx.beginPath();
			ctx.rect(barx[i], bary[i], barW, barH);
			ctx.fillStyle = "rgb(10, 250,  255)"
			ctx.fill();
			ctx.closePath();
		};
	};
}
function checkHit() {
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

	if (12 + r > y && (x > paddleX && x < paddleWidth + paddleX && dx <= -2 && dy < 0)) {
		if (x > paddleX && x < paddleX + paddleWidth / 2){
		dy = -dy;
	}
	}
	if (12 + r > y && (x > paddleX && x < paddleWidth + paddleX && dx >= 1.5 && dy < 0)) {
		if (x > paddleX + paddleWidth / 2 && x < paddleX + paddleWidth) {
		dy = -dy;
	}
	}
	else if (15 + 20 > y && (x > paddleX && x < paddleWidth + paddleX)) {
		if (x >= paddleX && x <= paddleX + (paddleWidth / 5) && dx < 1.5 && dy < 0) {
			dy = -dy;
			dx = dx - 0.9;

		}

		if (x >= paddleX + (paddleWidth / 5)+1 && x <= paddleX + (paddleWidth / 5) * 2 && dx < 2 && dy < 0) {
			dy = -dy;
			dx = dx - 0.4;
		}

		if (x >= paddleX + (paddleWidth / 5) * 2 + 1 && x <= paddleX + (paddleWidth / 5) * 3 && dy < 0) {
			dy = -dy;
		}
		if (x >= paddleX + (paddleWidth / 5) * 3 + 1 && x <= paddleX + (paddleWidth / 5) * 4 && dx > -2 && dy < 0) {
			dy = -dy;
			dx = dx + 0.4;


		}
		if (x >= paddleX + (paddleWidth / 5) * 4 + 1 && x <= paddleX + paddleWidth && dx > -2 && dy < 0) {
			dy = -dy;
			dx = dx + 0.9;
		}

	}
}
function checkHitTwo() {
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

	if (12 + r > Y && (X > paddleX && X < paddleWidth + paddleX && dX <= -2 && dY < 0)) {
		if (X > paddleX && X < paddleX + paddleWidth / 2){
		dY = -dY;
	}
	}
	if (12 + r > Y && (X > paddleX && X < paddleWidth + paddleX && dX >= 2 && dY < 0)) {
		if (X > paddleX + paddleWidth / 2 && X < paddleX + paddleWidth) {
		dY = -dY;
	}
	}
	else if (15 + 20 > Y && (X > paddleX && X < paddleWidth + paddleX)) {
			if (X >= paddleX && X <= paddleX + (paddleWidth / 5) && dX < 1.5 && dY < 0) {
				dY = -dY;
				dX = dX - 0.9;

		}


		if (X >= paddleX + (paddleWidth / 5)+1 && X <= paddleX + (paddleWidth / 5) * 2 && dX < 1.5 && dY < 0) {
			dY = -dY;
			dX = dX - 0.4;
		}

		if (X >= paddleX + (paddleWidth / 5) * 2 + 1 && X <= paddleX + (paddleWidth / 5) * 3 && dY < 0) {
			dY = -dY;
		}
		if (X >= paddleX + (paddleWidth / 5) * 3 + 1 && X <= paddleX + (paddleWidth / 5) * 4 && dX > -1.5 && dY < 0) {
			dY = -dY;
			dX = dX + 0.4;


		}
		if (X >= paddleX + (paddleWidth / 5) * 4 + 1 && X <= paddleX + paddleWidth && dX > -1.5 && dY < 0) {
			dY = -dY;
			dX = dX + 0.9;
		}
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
function movePaddleTwo() {
	if(aPressed && paddleX > 0) {
		paddleX += -dxPaddle;

	}
	if(dPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += dxPaddle;
	}
	if(dPressed == false) {
		paddlex += 0
	}
	if(aPressed == false) {
		paddlex +=0
	}
}
function levelUp() {
	if (row) {
		rows += 1
		barH /= 1.5
		barW /= 1.25
		columns += 1
		barx = [];
		bary = [];
		console.log(extra)
		extra = (410- barH * rows) / (rows - 1)
		console.log(extra)
		finalOpening = barH + extra
		openingTwo = (800 - barW * columns) / (columns - 1)
		opening = barW + openingTwo;
		buildBars();
	}
}
