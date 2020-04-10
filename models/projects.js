const mongoose = require("mongoose");

const Schema = mongoose.Schema

const projectSchema = new Schema({
  project: {
    type: String,
    User_id: String,
    index: true
  },
  description: String,
  DueDate: {
    type: Date,
    default: Date.now
  }
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;