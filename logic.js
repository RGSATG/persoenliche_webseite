//Code für Farbenwechsler
const colors = ["Green", "Aquamarine", "Blue", "Chocolate", "DarkOrange", "Fuchsia", "Gold", "Indigo"]

function colorChange() {
    document.getElementById("chameleon").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
};

//Code für Notenspiel
const notenspiel = document.getElementById("notenspiel");
const noteInput = document.getElementById("noteInput");
const timer = document.getElementById("timer");
const speedometer = document.getElementById("speedometer");
const startButton = document.getElementById("startButton");
let averageSpeed = 0;
let startTime;
let note;
let notesArray = ["A", "B", "C", "D", "E", "F", "G"]
let currentPitchArray = [];

noteInput.addEventListener("input", () => {
    const valueArray = noteInput.value.toUpperCase().split("");
    let correct = true;
    currentPitchArray.forEach((note, index) => {
        const inputPitch = valueArray[index];
        const currentNote = document.getElementById((index + 1).toString());
        if (inputPitch == null) {
            currentNote.classList.remove("correct");
            currentNote.classList.remove("incorrect");
            correct = false;
        } else if (inputPitch === currentPitchArray[index][0]) {
                currentNote.classList.add("correct");
                currentNote.classList.remove("incorrect");
        } else {
            currentNote.classList.add("incorrect");
            currentNote.classList.remove("correct");
            correct = false;
        }
    });
    if (correct) {
            noteInput.value = null;
            getAverageSpeed();
            loadNotes();
    }
});

function calculateNoteNumber() {
    return Math.floor(notenspiel.offsetWidth / 55 + 1); 
}

function getRandomPitch() {
    let pitch = notesArray[Math.floor(Math.random() * 7)] + Math.floor(Math.random() * 2);
    return pitch;
}

function loadNotes() {
    let notePosition = 1;
    let currentPitch;
    notenspiel.innerHTML = "";
    let clef = document.createElement("img");
    clef.src = "img/violin_clef.svg";
    clef.alt = "Violinschlüsel";
    clef.id = "violin_clef";
    notenspiel.appendChild(clef);
    currentPitchArray = [];
    while (calculateNoteNumber() != notePosition) {
        let newPitch = getRandomPitch();
        while (newPitch === currentPitch) {
            newPitch = getRandomPitch();
        }
        currentPitch = newPitch;
        note = document.createElement("span");
        note.classList.add("note");
        note.classList.add(currentPitch);
        if (currentPitch === "B1" || currentPitch === "D0") {
            note.classList.add("ledger_line_below");
        } else if (currentPitch === "G1") {
            note.classList.add("ledger_line_above");
        } else if (currentPitch === "C0" || currentPitch === "A1") {
            note.classList.add("ledger_line_center");
        }
        note.id = notePosition;
        notenspiel.appendChild(note);    
        notePosition++;
        currentPitchArray.push(currentPitch);
    }
    speedometer.innerText = averageSpeed;
    startTimer();
}

function startTimer() {
    timer.innerText = 0;
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime();
    }, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

function getAverageSpeed() {
    let currentSpeed = Math.round(calculateNoteNumber() / (getTimerTime() / 60));
    if (averageSpeed !== 0) {
            averageSpeed = (averageSpeed + currentSpeed) / 2;
        } else {
            averageSpeed = currentSpeed;
        }
}

function startGame() {
    calculateNoteNumber();
    loadNotes();
    noteInput.focus();
    startButton.style.display = "none";
}
