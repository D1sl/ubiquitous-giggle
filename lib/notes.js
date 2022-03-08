const path = require('path');
const fs = require('fs');


console.log("note handlers loaded");

function findById(id, notesArray) {
    console.log("findById has run")
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function removeNote(note, notesArray) {
    console.log("deleteNote has run");
    const noteId = notesArray.indexOf(note);
    notesArray.splice(noteId, 1);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

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