const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();


app.listen(3001, () => {
    console.log(`Server on port 3001`);
})