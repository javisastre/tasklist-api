const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let taskSchema = new Schema(
  {
    title: { type: String },
    body: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
