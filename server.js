const express = require('express');
const app = express();
const { notes } = require('./db/db'); 
const path = require('path');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const uuid = require('uuid');
const { findById, removeNote, createNewNote } = require('./lib/notes');

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
    res.json(notes);
}); 

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

app.post('/api/notes', (req, res) => {
    req.body.id = uuid.v4();
    console.log(notes);
    const note = createNewNote(req.body, notes);
    res.json(note);

});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.delete('/api/notes/:id', (req, res) => {
    removeNote(req.params.id, notes);
    res.json();
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })

// // Wildcard
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})