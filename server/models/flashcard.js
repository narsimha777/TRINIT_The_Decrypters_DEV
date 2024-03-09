const { Schema, model } = require("mongoose");

const flashSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    flashcards: 
        {
            word1: { type: String, required: true },
            language1: { type: String, required: true },
            word2: { type: String, required: true },
            language2: { type: String, required: true },
        }
});

const FlashModel = model("Flash", flashSchema);
module.exports = FlashModel;
