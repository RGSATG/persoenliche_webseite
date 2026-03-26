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
const einstellungen = document.getElementById("einstellungen");
const optionH = document.getElementById("optionH");
const optionB = document.getElementById("optionB");
const clefArray = ["violin", "bass"]
let clef;
let averageSpeed = 0;
let startTime;
let note;

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
    let notesArray;
    if (optionB.checked) {
        notesArray = ["A", "B", "C", "D", "E", "F", "G"]
    }
    else {
        notesArray = ["A", "H", "C", "D", "E", "F", "G"]
    }
    let pitch = notesArray[Math.floor(Math.random() * notesArray.length)];
    if (clef === "violin") {
        if (pitch === "B" || pitch === "H") {
            pitch += Math.floor(Math.random() * 3) + 3;
        } else {
            pitch += (Math.floor(Math.random() * 2) + 4);
        }
    } else if (clef === "bass") {
        if (pitch === "D") {
            pitch += (Math.floor(Math.random() * 3) + 2);
        } else if (pitch === "C") {
            pitch += (Math.floor(Math.random() * 2) + 3);
        } else {
            pitch += (Math.floor(Math.random() * 2) + 2)
        }
    }
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
        while (newPitch === currentPitch) {
            newPitch = getRandomPitch();
        }
        currentPitch = newPitch;
        note = document.createElement("span");
        note.classList.add("note");
        note.classList.add(currentPitch);
        if (currentPitch === "D4" || currentPitch === "F2" || currentPitch === "B5" || currentPitch === "H5") {
            note.classList.add("ledger_line_below");
        } else if (currentPitch === "D2" || currentPitch === "B3" || currentPitch === "H3" || currentPitch === "G5") {
            note.classList.add("ledger_line_above");
        } else if (currentPitch === "E2" || currentPitch === "C4" || currentPitch === "A5") {
            note.classList.add("ledger_line_center");
        }
        if (clef === "bass") {
            if (currentPitch === "D2") {
                note.style.top = "90px";
            } else if (currentPitch === "E2") {
                note.style.top = "82.5px";
            } else if (currentPitch === "F2") {
                note.style.top = "75px";
            } else if (currentPitch === "G2") {
                note.style.top = "67.5px";
            } else if (currentPitch === "A2") {
                note.style.top = "60px";
            } else if (currentPitch === "B2" || currentPitch === "H2") {
                note.style.top = "52.5px";
            } else if (currentPitch === "C3") {
                note.style.top = "45px";
            } else if (currentPitch === "D3") {
                note.style.top = "37.5px";
            } else if (currentPitch === "E3") {
                note.style.top = "30px";
            } else if (currentPitch === "F3") {
                note.style.top = "22.5px";
            } else if (currentPitch === "G3") {
                note.style.top = "15px";
            } else if (currentPitch === "A3") {
                note.style.top = "7.5px";
            } else if (currentPitch === "B3" || currentPitch === "H3") {
                note.style.top = "0px";
            } else if (currentPitch === "C4") {
                note.style.top = "-7.5px";
            } else if (currentPitch === "D4") {
                note.style.top = "-15px";
            }
        } else if (clef === "violin") {
            if (currentPitch === "B3") {
                note.style.top = "90px";
            } else if (currentPitch === "C4") {
                note.style.top = "82.5px";
            } else if (currentPitch === "D4") {
                note.style.top = "75px";
            } else if (currentPitch === "E4") {
                note.style.top = "67.5px";
            } else if (currentPitch === "F4") {
                note.style.top = "60px";
            } else if (currentPitch === "G4") {
                note.style.top = "52.5px";
            } else if (currentPitch === "A4") {
                note.style.top = "45px";
            } else if (currentPitch === "B4" || currentPitch === "H4") {
                note.style.top = "37.5px";
            } else if (currentPitch === "C5") {
                note.style.top = "30px";
            } else if (currentPitch === "D5") {
                note.style.top = "22.5px";
            } else if (currentPitch === "E5") {
                note.style.top = "15px";
            } else if (currentPitch === "F5") {
                note.style.top = "7.5px";
            } else if (currentPitch === "G5") {
                note.style.top = "0px";
            } else if (currentPitch === "A5") {
                note.style.top = "-7.5px";
            } else if (currentPitch === "B5" || currentPitch === "H5") {
                note.style.top = "-15px";
            }
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
    einstellungen.style.display = "none";
}
