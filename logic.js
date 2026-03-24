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
const clefArray = ["violin", "bass"]
let clef;
let averageSpeed = 0;
let startTime;
let note;
let notesArray = ["bD2", "bE2", "bF2", "bG2", "bA2", "bB2", "bC3", "bD3", "bE3", "bF3", "bG3", "bA3", "bB3", "vB3", "bC4", "vC4", "bD4", "vD4", "vE4", "vF4", "vG4", "vA4", "vB4", "vC5", "vD5", "vE5", "vF5", "vG5", "vA5", "vB5"]

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
        } else if (inputPitch === currentPitchArray[index][1]) {
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
    let pitch = notesArray[Math.floor(Math.random() * notesArray.length)];
    return pitch;
}

function setClef() {
    clef = clefArray[Math.floor(Math.random() * 2)]
}

function loadNotes() {
    let notePosition = 1;
    let currentPitch;
    notenspiel.innerHTML = "";
    let clefSign = document.createElement("img");
    setClef();
    if (clef === "violin") {
        clefSign.src = "img/violin_clef.svg";
        clefSign.alt = "Violinschlüsel";
        clefSign.id = "violin_clef";
    } else if (clef === "bass") {
        clefSign.src = "img/bass_clef.svg";
        clefSign.alt = "Basschlüssel";
        clefSign.id = "bass_clef";
    }
    notenspiel.appendChild(clefSign);
    currentPitchArray = [];
    while (calculateNoteNumber() !== notePosition) {
        let newPitch = getRandomPitch();
        while (newPitch === currentPitch || newPitch[0] != clef[0]) {
            newPitch = getRandomPitch();
        }
        currentPitch = newPitch;
        note = document.createElement("span");
        note.classList.add("note");
        note.classList.add(currentPitch);
        if (currentPitch === "bD4" || currentPitch === "bF2" || currentPitch === "vD4" || currentPitch === "vB5") {
            note.classList.add("ledger_line_below");
        } else if (currentPitch === "bD2" || currentPitch === "bD4" || currentPitch === "vB3" || currentPitch === "vG5") {
            note.classList.add("ledger_line_above");
        } else if (currentPitch === "bE2" || currentPitch === "bC4" || currentPitch === "vC4" || currentPitch === "vA5") {
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
            averageSpeed = Math.round((averageSpeed + currentSpeed) / 2);
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
