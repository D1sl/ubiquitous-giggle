const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes')

// Tells router to use noteRoutes instead of index.js
router.use(noteRoutes);

module.exports = router;