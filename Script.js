let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playEl = document.querySelector("#player-el");
let start = document.querySelector("#btn");
let drawnNewCard = document.querySelector("#btn2");
let playerName = document.getElementById("user-name");
const player = {
    chips : 200
}

player.name = playerName.value;
console.log(player);

playEl.textContent = player.name + ": $" + player.chips;
console.log(player.name);
function getRandomCard() {
    numx = Math.floor(Math.random()*13) + 1;
    if(numx===1) {
        numx = 11;
        return numx;
    }else if (numx>10) {
        numx =10;
        return numx;
    }else {
        return numx;
    }   
}

let startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard,secondCard];
    renderGame();
}

let renderGame = () => {   
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <=20){
        message = "Do you want to draw a card?"
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack! and won $20."   
        player.chips += 20; 
    }else{
        message = "You're out of the game! and lost $20."
        isAlive =false;
        player.chips -= 20;    
    }
    sumEl.textContent = "Sum: " + sum;
    document.getElementById("message-el").textContent = message;
    playEl.textContent = player.name + ": $" + player.chips;
}

let newCard = () => {
    if (isAlive && hasBlackjack == false){
    let cardx = getRandomCard();
    sum += cardx;
    cards.push(cardx);
    renderGame();
}
}

start.onclick = startGame;
drawnNewCard.onclick = newCard;




