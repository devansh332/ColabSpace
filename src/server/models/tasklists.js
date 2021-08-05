import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "TaskLists";

const schema = new Schema({
  taskListName: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
