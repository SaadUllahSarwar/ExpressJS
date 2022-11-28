const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required : true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectID,
        ref:"User",
        required : true
    }
},{timeStamps : true});

module.exports = mongoose.model("User", noteSchema);