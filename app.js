const express = require("express");
const connectDB = require('./db/connect');

const app = express();

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send();
});

const PORT = 3000 || process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
    }
    catch (e) {
        console.error(e);
    }
}

start();
