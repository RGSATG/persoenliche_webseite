//Code für Farbenwechsler
const colors = ["Green", "Aquamarine", "Blue", "Chocolate", "DarkOrange", "Fuchsia", "Gold", "Indigo"]

function colorChange() {
    document.getElementById("chameleon").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
};

//Code für Notenspiel
const notenspiel = document.getElementById("notenspiel");
const noteInput = document.getElementById("noteInput");
let note;
let pitches = ["A", "B", "C", "D", "E", "F", "G"]
let currentPitchArray = [];

noteInput.addEventListener("input", () => {
    const valueArray = noteInput.value.toUpperCase().split("");
    currentPitchArray.forEach((note, index) => {
        const inputPitch = valueArray[index];
        const currentNote = document.getElementById((index + 1).toString());
        if (inputPitch == null) {
            currentNote.classList.remove("correct");
            currentNote.classList.remove("incorrect");
        } else if (inputPitch === currentPitchArray[index]) {
                currentNote.classList.add("correct");
                currentNote.classList.remove("incorrect");
        } else {
            currentNote.classList.add("incorrect");
            currentNote.classList.remove("correct");
        }
    });
    if (valueArray.length === currentPitchArray.length) {
            noteInput.value = null;
            loadNotes();
    }
});

function calculateNoteNumber() {
    return notenspiel.offsetWidth / 50 + 1; 
}

function getRandomPitch() {
    let pitch = pitches[Math.floor(Math.random() * 7)];
    return pitch;
}

function loadNotes() {
    let notePosition = 1;
    let currentPitch;
    notenspiel.innerHTML = "";
    currentPitchArray = [];
    while (calculateNoteNumber() != notePosition) {
        currentPitch = getRandomPitch();
        note = document.createElement("span");
        note.classList.add("note");
        note.classList.add(currentPitch);
        note.id = notePosition;
        notenspiel.appendChild(note);    
        notePosition++;
        currentPitchArray.push(currentPitch);
    }
}

calculateNoteNumber();
loadNotes();
