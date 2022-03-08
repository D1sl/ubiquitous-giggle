const router = require('express').Router();
const { notes } = require('../../db/db'); 
const saveNoteData = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes);
}); 

router.post('db/db', (req, res) => {
    console.log(req.body)
})

module.exports = router;