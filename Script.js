let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let increment = () => {
    count ++;
    countEl.innerText = count;
}

function save(){
    let oldCount = count + " - ";
    saveEl.innerText += oldCount;
}