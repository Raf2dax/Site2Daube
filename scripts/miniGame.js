let score = 0;
let gameActive = false;
let timer;

const startButton = document.getElementById("startButton");
const targetImage = document.getElementById("targetImage");
const scoreDisplay = document.getElementById("score");

startButton.addEventListener("click", startGame);

function startGame() {
    if (gameActive) return; // To make it so there is no more than 1 game ongoing
    score = 0;
    gameActive = true;
    scoreDisplay.textContent = "Score : " + score;
    startButton.style.display = "none";
    spawnTarget();
}

function spawnTarget() {
    // Make the target spawn somewhere in the screen
    const x = Math.random() * (window.innerWidth - 50); // adjust to the screen
    const y = Math.random() * (window.innerHeight - 50);
    targetImage.style.left = `${x}px`;
    targetImage.style.top = `${y}px`;
    targetImage.style.display = "block";

    // Refresh timer and add score
    targetImage.onclick = () => {
        if (gameActive) {
            score++;
            scoreDisplay.textContent = "Score : " + score;
            clearTimeout(timer); // Renew the timer
            spawnTarget(); // Spawn the image at a random place
        }
    };

    // 1,5 secs Timer if game is ended
    timer = setTimeout(endGame, 1500);
}

function endGame() {
    gameActive = false;
    targetImage.style.display = "none";
    startButton.style.display = "block";
    alert("Temps écoulé ! Score final : " + score);
}
