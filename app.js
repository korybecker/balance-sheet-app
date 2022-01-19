const express = require("express");
const connectDB = require('./db/connect');
const assets = require('./routes/assets')
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/assets', assets);

const PORT = 3000 || process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
    }
    catch (e) {
        console.error(e);
    }
}

start();
