const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Modularised routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Features that allow the client to access the public folder as well as folders inside that.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Sets up the port for the project
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})