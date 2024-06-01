const express = require('express');
const notes = require('./data/notes')
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.get('/', (req, res) => {
    res.send('Api is running..');
});
app.get('/api/notes', (req, res) => {
    //res.json(notes)
    res.send(notes);
});
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));


