
var count = 0;
function lap() {
    count ++;
    // alert(`btm is clicked and and i is ${count}`);
    document.getElementById("count-el").innerText = count;
}

document.getElementById("count-el").innerText = 5;
