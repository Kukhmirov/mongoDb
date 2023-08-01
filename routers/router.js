const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");


router.get("/", async(req, res) => {
    try {
        const todo = await Todo.find().select("-__v");
        res.json(todo);
    } catch(env) {
        res.status(500).json(env);
    };
});

router.get("/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const todo = await Todo.findById(id).select("-__v");
        res.json(todo);
    } catch(env) {
        res.status(500).json(env);
    };
});

router.post("/", async(req, res) => {
    const {title, description} = req.body;
    const newTodo = new Todo({
        title,
        description,
    });

    try {
        await newTodo.save();
        res.json(newTodo)
    } catch(env) {
        res.status(500).json(env);
    };
});

router.put("/:id", async(req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;

    try {
        await Todo.findByIdAndUpdate(id, {
            title,
            description,
        });
        // res.redirect(`/${id}`);
    } catch(env) {
        res.status(500).json(env);
    };
});

router.delete("/:id", async(req, res) => {
    const {id} = req.params;

    try {
        await Todo.deleteOne({
            _id: id,
        });
        res.params(400).json(true);
    } catch(env) {
        res.status(500).json(env);
    }
});

module.exports = router;