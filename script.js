let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("result");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

function randomCard() {
  let randomNumber = Math.round(Math.random() * 12) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  //defining a for loop to show all the cards in the array "cards" instead of specified number of cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " , ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    renderGame();
  }
}
