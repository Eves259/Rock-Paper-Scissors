"use strict";

var sound = document.getElementById("bossMusic"); //Sets the variable "sound" equal to the element "bossMusic"

function play() { //This plays the music that is linked in the HTML document
    sound.play();
}

function pause() { //This pauses the music that is linked in the HTML document
    sound.pause();
}

//This function is linked to a button that plays music when it is pressed and pauses musio when it is pressed again. It is linked to three different buttons.
function activateSound() {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
}

//Randomly selects rock, paper, or scissors and displays it in an alert
function RNG() {
    var computer = Math.ceil(Math.random()*3);
    if (computer == 1) {
        alert("Rock");
    } else if (computer == 2) {
        alert("Paper");
    } else {
        alert("Scissors");
    }
}

//Chooses the winner if the conditions are met
function chooseWinner() {
    var computer = Math.ceil(Math.random()*3);
    var choice = 'rock' || 'paper' || 'scissors';
    if (computer == 1 && choice == 'scissors' || computer == 2 && choice == 'rock' || computer == 3 && choice == 'paper') {
    alert("The computer wins");
    } else if (computer == 1 && choice == 'paper' || computer == 2 && choice == 'scissors' || computer == 3 && choice == 'rock') {
        alert("You won");
    } else {
        alert("It's a draw");
    }
}

/*
Ethan Vesely
12-7-2020
West-MEC Northeast Coding
*/