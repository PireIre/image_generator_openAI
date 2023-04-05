// set up express server 
const express = require('express');
const dotenv = require('dotenv').config();
const openaiRoutes = require('./routes/openaiRoutes');
// read port from environment variable otherwise, use 3001
const port = process.env.PORT || 4000;

const app = express();

// enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/openai', openaiRoutes);

// run server 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


