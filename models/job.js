var mongoose = require("mongoose");

var jobSchema = new mongoose.Schema({
   title: String,
   image: String,
   amazon: String,
   slug: String,
   role: String,
   location: String,
   term: String,
   price: String,
   ogDesc: String,
   description: String,
   author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
   },
   date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);