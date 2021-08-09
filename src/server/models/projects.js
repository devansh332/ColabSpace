import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Projects";

const schema = new Schema({
  projectName: String,
  description: String,
  projectOwner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  taskLists: [
    {
      type: Schema.Types.ObjectId,
      ref: "TaskLists",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
