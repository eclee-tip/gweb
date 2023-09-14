const mazeButton = document.getElementById("mazeButton");
const snakeButton = document.getElementById("snakeButton");
const gameContainer = document.getElementById("gameContainer");

mazeButton.addEventListener("click", () => {
    // Load the maze game here
    gameContainer.innerHTML = '<iframe src="/Maze/maze_game.html" width="800" height="600"></iframe>';
});

snakeButton.addEventListener("click", () => {
    // Load the snake game here
    gameContainer.innerHTML = '<iframe src="/SnakeGame/snake_game.html" width="800" height="600"></iframe>';
});
