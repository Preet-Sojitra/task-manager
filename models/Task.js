const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    // Basic validators
    // required: true, // Simple this also works
    required: [true, "must provide name"], // with custom message
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Task", TaskSchema)
