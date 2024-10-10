
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;


const paddleWidth = 10;
const paddleHeight = 100;
const ballRadius = 10;


const player = {
    x: 0,
    y: (canvas.height - paddleHeight) / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0
};


const ai = {
    x: canvas.width - paddleWidth,
    y: (canvas.height - paddleHeight) / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 3 // AI paddle speed
};


const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: ballRadius,
    speed: 4,
    dx: 4, // horizontal direction and speed
    dy: 4  // vertical direction and speed
}
function drawPaddle(x, y, width, height) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, width, height);
}

// Draw the ball
function drawBall(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Update paddle positions
function updatePlayerPaddle() {
    player.y += player.dy;
    if (player.y < 0) player.y = 0;
    if (player.y + paddleHeight > canvas.height) player.y = canvas.height - paddleHeight;
}

function updateAIPaddle() {
    if (ai.y + paddleHeight / 2 < ball.y) {
        ai.y += ai.dy;
    } else {
        ai.y -= ai.dy;
    }
    if (ai.y < 0) ai.y = 0;
    if (ai.y + paddleHeight > canvas.height) ai.y = canvas.height - paddleHeight;
}


function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }


    if (ball.x - ball.radius < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx *= -1;
    }

    
    if (ball.x + ball.radius > ai.x && ball.y > ai.y && ball.y < ai.y + ai.height) {
        ball.dx *= -1;
    }

    
    if (ball.x - ball.radius < 0) {
        resetBall();
    }

    
    if (ball.x + ball.radius > canvas.width) {
        resetBall();
    }

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx;
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        player.dy = -5;
    } else if (event.key === "ArrowDown") {
        player.dy = 5;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        player.dy = 0;
    }
});


function update() {
    updatePlayerPaddle();
    updateAIPaddle();
    moveBall();
}


function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(player.x, player.y, player.width, player.height);
    drawPaddle(ai.x, ai.y, ai.width, ai.height);
    drawBall(ball.x, ball.y, ball.radius);
}


function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

gameLoop();
}