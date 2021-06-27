let player = {
    
    chips : "200"
}
let playerName = window.prompt("Welcome! Type your Alias","Player1");
player.name = playerName;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playEl = document.querySelector("#player-el");


playEl.textContent = player.name + ": $" + player.chips;

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
        message = "Do you want to draw a card?💁🏻"
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack!🥳"    
    }else{
        message = "You're out of the game!😇"
        isAlive =false;    
    }
    sumEl.textContent = "Sum: " + sum;
    document.getElementById("message-el").textContent = message;
}

let newCard = () => {
    if (isAlive && hasBlackjack == false){
    let cardx = getRandomCard();
    sum += cardx;
    cards.push(cardx);
    renderGame();
}
}


// let listItem2 = document.getElementById("list2");
// let list = document.getElementsByTagName("ul")[0];
// let newItemLast = document.createElement("li");
// let newTextLast = document.createTextNode("Hahaha, I am new!🤓");
// newItemLast.appendChild(newTextLast);
// console.log(newItemLast);
// list.insertBefore(newItemLast,listItem2);

// let listItems = document.querySelectorAll("li");


// let clickIt = () => {
// for (let i = 0;i<listItems.length;i++) {
//     if (listItems[i].hasAttribute("class")){
//     listItems[i].className = "gla";
//     }else {
//         listItems[i].setAttribute("class","gla");
//     }  
// }
// }