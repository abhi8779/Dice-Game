'use strict';

//starting elements
let score0Element = document.querySelector('#score--0');
let score1Element = document.getElementById('score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let dicecImage = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceAppearOnScreen = function () {
  document.querySelector('.dice').classList.remove('hidden');
};
const diceDissAppearOnScreen = function () {
  document.querySelector('.dice').classList.add('hidden');
};
const gameResetter = function () {};
const playerSwitcher = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScoreJs1 = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

let currentScoreJs1, scores, activePlayer, playing;
const initial = function () {
  diceDissAppearOnScreen();
  //starting condition
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScoreJs1 = 0;
  scores = [0, 0];
  playing = true;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  activePlayer = 0;
};
initial();

// Roll dice functionality
rollBtn.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll.
    let randomDiceNumber = Math.trunc(Math.random() * 6 + 1);
    // 2. display dice roll.
    diceAppearOnScreen();
    dicecImage.src = `dice-${randomDiceNumber}.png`;
    // 3. chek if its  1.
    if (randomDiceNumber !== 1) {
      currentScoreJs1 += randomDiceNumber;
      // activePlayer = 0;
      // if (activePlayer === 0) {
      //   currentScoreJs1 += randomDiceNumber;
      //   currentScore0.textContent = currentScoreJs1;
      // } else {
      //   currentScoreJs2 += randomDiceNumber;
      //   currentScore1.textContent = currentScoreJs2;
      // }
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScoreJs1;
    } else {
      playerSwitcher();
      // if (activePlayer === 1) {
      //   player1.classList.add('player--active');
      //   player0.classList.remove('player--active');
      // } else {
      //   player1.classList.remove('player--active');
      //   player0.classList.add('player--active');
      // }
    }
  } else {
  }
});

// Hold button functionallity

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScoreJs1;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScoreJs1 = 0;

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dicecImage.classList.add('hidden');
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

// New game functionality

newGameBtn.addEventListener('click', initial);
