let firstCard = 0;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let sumEl = document.querySelector("#sum-el");
console.log(sumEl);

let startGame = () => {    
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
let listItem2 = document.getElementById("list2");
let list = document.getElementsByTagName("ul")[0];
let newItemLast = document.createElement("li");
let newTextLast = document.createTextNode("Hahaha, I am new!🤓");
newItemLast.appendChild(newTextLast);
console.log(newItemLast);
list.insertBefore(newItemLast,listItem2);

let listItems = document.querySelectorAll("li");


let clickIt = () => {
for (let i = 0;i<listItems.length;i++) {
    if (listItems[i].hasAttribute("class")){
    listItems[i].className = "gla";
    }else {
        listItems[i].setAttribute("class","gla");
    }  
}
}