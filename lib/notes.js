const path = require('path');
const fs = require('fs');

// Takes an id and searches the db array for it
function findById(id, notesArray) {
    console.log("findById has run")
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// Uses the ID of the note that the user wants to delete and splices it out of the array. Then saves the json file.
function removeNote(note, notesArray) {
    const noteId = notesArray.indexOf(note);
    notesArray.splice(noteId, 1);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// Creates a new note using the information user provides
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

module.exports = { findById, removeNote, createNewNote }