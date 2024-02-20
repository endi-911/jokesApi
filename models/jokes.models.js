const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength : [10, "setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        minlength : [3, "setup must be at least 3 characters long"]
    }
    },

    { timestamps: true }

);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
