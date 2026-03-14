//Code für Farbenwechsler
const colors = ["Green", "Aquamarine", "Blue", "Chocolate", "DarkOrange", "Fuchsia", "Gold", "Indigo"]

function colorChange() {
    document.getElementById("chameleon").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
};

//Code für Notenspiel
const notenspiel = document.getElementById("notenspiel");
let noteNumber;
let note;
let pitches = ["A", "B", "C", "D", "E", "F", "G"]

function calculateNoteNumber() {
    noteNumber = notenspiel.offsetWidth / 50 + 1; 
}

function getRandomPitch() {
    let pitch = pitches[Math.floor(Math.random() * 7)];
    return pitch;
}

function loadNotes() {
    let notePosition = 1;
    while (noteNumber != notePosition) {
        note = document.createElement("span");
        note.classList.add("note");
        note.classList.add(getRandomPitch());
        note.classList.add(notePosition);
        notenspiel.appendChild(note);    
        notePosition++;
        console.log(note);
    }
}

calculateNoteNumber();
loadNotes();

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
