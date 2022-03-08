const router = require('express').Router();
const { notes } = require('../../db/db'); 
const { findById, removeNote, createNewNote } = require('../../lib/notes');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
}); 

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    console.log(notes);
    const note = createNewNote(req.body, notes);
    res.json(note);

});

router.delete('/notes/:id', (req, res) => {
    removeNote(req.params.id, notes);
    res.json();
});

module.exports = router;