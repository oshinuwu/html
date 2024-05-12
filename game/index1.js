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

const locations = [
    {
        name: "lobby",
        "button text": ["buy 10 health(100 cash)","buy a weapon(100 cash)","go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Welcome to the lobby"
    },

    {
        name: "town square",
        "button text": ["Go to lobby","Go to battle","Go to inventory"],
        "button functions": [golobby, gobattle, goinventory],
        text: " Welcome to the townsquare \"you can see the store\" "
    }
]

//initialize buttons
button1.onclick = golobby;
button2.onclick = gobattle;
button3.onclick = goinventory;

function update(location) {
    button1.innerHTML = location["button text"][0];
    button2.innerHTML = location["button text"][1];
    button3.innerHTML = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function golobby() {
    update(locations[0]);
}

function goTown() {
    update(locations[1]);
}

function buyHealth() {
    console.log("buy health");
}

function buyWeapon(){
    console.log("buy weapon");
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