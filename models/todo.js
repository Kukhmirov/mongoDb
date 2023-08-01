const { Schema, model } = require("mongoose");

const todoScheme = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("Todo", todoScheme);