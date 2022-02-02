const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Route to index
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Route to notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.listen(3001, () => {
    console.log(`Server on port 3001`);
})



