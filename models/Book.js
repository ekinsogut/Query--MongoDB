const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    tags: [{ }]
    // title: String,
    // published: Boolean,
    // comments: [ {String} ],
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});

module.exports = mongoose.model("book",BookSchema);

