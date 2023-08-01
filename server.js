const express = require("express");
const mongoose = require("mongoose");


const todoApiRouter = require("./routers/router");

const app = express();

app.use(express.json());
app.use("/api/todo", todoApiRouter);

async function start(PORT, UrlDb){
    try {
        await mongoose.connect(UrlDb, {
            dbName: 'todo',
        });
        app.listen(PORT, () => {
            console.log(`Сервер запущена на ${PORT}`);
        });
    } catch(env) {
        console.log(env);
    }
};

const UrlDb = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;
start(PORT, UrlDb);