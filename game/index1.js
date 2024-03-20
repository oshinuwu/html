document.addEventListener('DOMContentLoaded', function() {
    let xp = 0;
let health = 100;
let cash = 500;
let weapon = 0;
let battle;
let inventory = ["dagger"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthtext = document.querySelector("#healthtext");
const cashtext = document.querySelector("#cashtext");

//initialize buttons
button1.onclick = golobby;
button2.onclick = gobattle;
button3.onclick = goinventory;

function golobby() {
button1.innerHTML = "buy 10 health(100 cash)";
button2.innerHTML = "buy a weapon(100 cash)";
button3.innerHTML = "go to town square";
}

function gobattle() {
console.log("Going into a battle");
// Add your battle logic here
}

function goinventory() {
console.log("Going to inventory");
// Add your inventory logic here
}


});