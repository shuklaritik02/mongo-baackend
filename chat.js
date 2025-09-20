const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        require: true
    },

    to : {
type: String,
require: true
    },
    message: {
        type: String,
        maxLength : 50
    },

    created : {
        type: Date,
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;