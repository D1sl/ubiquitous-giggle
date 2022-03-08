const express = require('express');
const app = express();
const { notes } = require('./db/db'); 
const path = require('path');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const uuid = require('uuid');
const { findById, removeNote, createNewNote } = require('./lib/notes');

const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// Features that allow the client to access the public folder as well as folders inside that.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// // Main API endpoint
// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// }); 

// Get notes based on their unique ID
// app.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// })

// // API endpoint for POST requests
// app.post('/api/notes', (req, res) => {
//     req.body.id = uuid.v4();
//     console.log(notes);
//     const note = createNewNote(req.body, notes);
//     res.json(note);

// });

// HTML route to direct user to serve the notes.html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// // API request for deleting entries
// app.delete('/api/notes/:id', (req, res) => {
//     removeNote(req.params.id, notes);
//     res.json();
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// })

// Wildcard - serves index.html when the user enters an address that doesn't match any of the other HTML routes.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

// Sets up the port for the project
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})