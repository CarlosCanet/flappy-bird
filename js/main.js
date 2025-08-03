//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// buttons
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")

const scoreNode = document.querySelector("#score-value")


//* GLOBAL GAME VARIABLES
let birdObj = null;
let obstacleArr = [];
let gameIntervalId = null, obstacleSpawnIntervalId = null;
let frames = 0;
let score = 0;




//* GLOBAL GAME FUNCTIONS
function startGame() {
    // 1. Hide the start game screen
    startScreenNode.style.display = "none";
    // 2. Show the game screen
    gameScreenNode.style.display = "flex";
    // 3. Add initial element to the game
    const playerPosX = 70, playerPosY = 50;
    const playerWidth = 40, playerHeight = 32;
    const playerSpeedGravity = 2, playerSpeedJump = 50;
    birdObj = new Bird("img", "bird", "./images/taylor.png", playerPosX, playerPosY, playerWidth, playerHeight, playerSpeedGravity, playerSpeedJump);
    // 4. Start the game loop
    gameIntervalId = setInterval(gameLoop, Math.round(1000/60));      // Running the game at 60 fps
    // 5. Start any other interval or timeout that we may need
    obstacleSpawnIntervalId = setInterval(spawnObstacle, 2000);
}

function spawnObstacle() {
    // let heightSpawn = Math.floor(Math.random() * (-110));
    // obstacleArr.push(new Obstacle("img", "obstacle", "./images/obstacle_top.png", gameBoxNode.offsetWidth, heightSpawn, 60, 180, 2));
    // obstacleArr.push(new Obstacle("img", "obstacle", "./images/obstacle_bottom.png", gameBoxNode.offsetWidth, heightSpawn + pipesOffset, 60, 180, 2));
    
    const obstacleHeight = 96;
    const obstacleWidth = 200;
    const obstacleSpeed = 2;
    const pipesOffset = 350;
    let heightSpawn = Math.floor(Math.random() * (-obstacleWidth/2));
    obstacleArr.push(new Obstacle("img", "obstacle", "./images/snake_top.png", gameBoxNode.offsetWidth, heightSpawn, obstacleHeight, obstacleWidth, obstacleSpeed));
    obstacleArr.push(new Obstacle("img", "obstacle", "./images/snake_bottom.png", gameBoxNode.offsetWidth, heightSpawn + pipesOffset, obstacleHeight, obstacleWidth, obstacleSpeed));
}

function checkDespawnObstacle() {
    if (obstacleArr[0] && obstacleArr[0].x < -obstacleArr[0].w) {
        obstacleArr[0].node.remove();
        obstacleArr.splice(0, 1);
        score += 0.5;
        scoreNode.innerText = Math.floor(score);
    }
}

function gameLoop() {
    frames++;
    birdObj.gravityEffect();
    obstacleArr.forEach(obstacle => obstacle.automaticMovement());
    checkDespawnObstacle();
    checkCollisionBirdFloor();
    checkCollisionBirdObstacles();
    // if (frames % 90 === 0) {
    //     spawnObstacle();
    // }
}

function handleBirdJumpKeyboard(event) {
    if (event.code === "Space" || event.code === "ArrowUp") {
        birdObj.jump();
    }
}

function handleBirdJumpTouchscreen(event) {
    birdObj.jump();
}

function checkCollisionBirdFloor() {
    if (birdObj.y > gameBoxNode.offsetHeight - birdObj.h) {
        // console.log("suelo");
        gameOver();
    }
}

function checkCollisionBirdObstacles() {
    obstacleArr.forEach((eachObstacle) => {
        if (birdObj.checkCollision(eachObstacle)) {
            gameOver();
        }
    })
}

function gameOver() {
    // 1. Clear ALL intervals and timeout
    clearInterval(gameIntervalId);
    clearInterval(obstacleSpawnIntervalId);
    // 2. Hide game screen
    gameScreenNode.style.display = "none";
    // 3. Show the game over screen
    gameOverScreenNode.style.display = "flex";
    // 4. CLEAR the game (removing all nodes and restarting variables)

}



//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
document.addEventListener("keydown", handleBirdJumpKeyboard);
document.addEventListener("touchstart", handleBirdJumpTouchscreen);
// startGame();