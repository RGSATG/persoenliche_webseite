const colors = ["Green", "Aquamarine", "Blue", "Chocolate", "DarkOrange", "Fuchsia", "Gold", "Indigo"]
var pitch;

function colorChange() {
    document.getElementById("chameleon").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
};

function getPitch() {
    pitch = (Math.floor(Math.random() * 11) * 7.5);
    document.getElementById("note").style.display = "block";
    document.getElementById("note").style.top = pitch + "px";
    document.getElementById("note").style.backgroundColor = "black";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("buttonContainer").style.display = "flex";
}

function gameLost() {
        document.getElementById("note").style.backgroundColor = "red";
        document.getElementById("buttonContainer").style.display = "none";
        document.getElementById("startButton").style.display = "block";
}

function gameWon() {
        document.getElementById("note").style.backgroundColor = "green";
        document.getElementById("buttonContainer").style.display = "none";
        document.getElementById("startButton").style.display = "block";
}

function checkIfPitchA() {
    if (pitch === 45) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchB() {
    if (pitch === 37.5) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchC() {
    if (pitch === 30) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchD() {
    if (pitch === 22.5 || pitch === 75) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchE() {
    if (pitch === 15 || pitch === 67.5) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchF() {
    if (pitch === 7.5 || pitch === 60) {
        gameWon();
    } else {
        gameLost();
    }
}

function checkIfPitchG() {
    if (pitch === 0 || pitch === 52.5) {
        gameWon();
    } else {
        gameLost();
    }
}
