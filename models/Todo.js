const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  task: String,
  disp: String,
  time: String,
  done: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model("task_list", todoSchema);
