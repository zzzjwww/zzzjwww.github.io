let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-l");



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a>
        </li>
        `
    };
    ulEl.innerHTML = listItems;
}