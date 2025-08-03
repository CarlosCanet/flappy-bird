//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// buttons
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


//* GLOBAL GAME VARIABLES
let birdObj;
let gameIntervalId;




//* GLOBAL GAME FUNCTIONS
function startGame() {
    // 1. Hide the start game screen
    startScreenNode.style.display = "none";
    // 2. Show the game screen
    gameScreenNode.style.display = "flex";
    // 3. Add initial element to the game
    birdObj = new Bird();
    let obstacleObj = new Obstacle();
    console.log(obstacleObj);
    // 4. Start the game loop
    gameIntervalId = setInterval(gameLoop, Math.round(1000/60));      // Running the game at 60 fps
    // 5. Start any other interval or timeout that we may need

}

function gameLoop() {
    birdObj.gravityEffect();
}





//* EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
        birdObj.jump();
    }
});
document.addEventListener("touchstart", (event) => {
    birdObj.jump();
});
startGame();