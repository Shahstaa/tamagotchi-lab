// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};
/*---------------------------- Variables (state) ----------------------------*/
let timer; 
let gameOver;
/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');
/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log("Game initialized!"); 
    gameOver = false; 
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000); 
    render();
}

function updateStates() {
    state.boredom += getRandomNumber(0, 3);
    state.hunger += getRandomNumber(0, 3);
    state.sleepiness += getRandomNumber(0, 3);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function runGame() {
    updateStates();
    render();
}
function render() {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
        clearInterval(timer); 
        gameMessageEl.classList.remove('hidden'); 
        resetBtnEl.classList.remove('hidden'); 
    }
}
function handleStatClick(stat) {
    state[stat] = 0; 
    render(); 
}
/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', () => handleStatClick('boredom'));
feedBtnEl.addEventListener('click', () => handleStatClick('hunger'));
sleepBtnEl.addEventListener('click', () => handleStatClick('sleepiness'));
resetBtnEl.addEventListener('click', init);
init();

