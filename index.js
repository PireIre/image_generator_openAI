// set up express server 
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

// read port from environment variable otherwise, use 3001
const port = process.env.PORT || 4000;

// run server 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


