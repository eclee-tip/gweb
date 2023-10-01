const mazeButton = document.getElementById("mazeButton");
const snakeButton = document.getElementById("snakeButton");
const rpsButton = document.getElementById("rpsButton");
const gameContainer = document.getElementById("gameContainer");

rpsButton.addEventListener("click", () => {
    // Load rock paper scissor game here
    gameContainer.innerHTML = '<iframe src="/RPSGame/rps_game.html" width="800" height="600"></iframe>';
})

mazeButton.addEventListener("click", () => {
    // Load the maze game here
    gameContainer.innerHTML = '<iframe src="/MazeGame/maze_game.html" width="800" height="600"></iframe>';
});

snakeButton.addEventListener("click", () => {
    // Load the snake game here
    gameContainer.innerHTML = '<iframe src="/SnakeGame/snake_game.html" width="800" height="600"></iframe>';
});
