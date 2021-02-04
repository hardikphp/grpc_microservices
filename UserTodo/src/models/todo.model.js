import { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    task: { type: String },
    desc: { type: String },
    assignedTo: [{ type: Schema.Types.ObjectId, ref: "User" }],
    addedBy: { type: Schema.Types.ObjectId, ref: "User" },
    regionName: { type: String },
    isCompleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

const todo = new model("Todo", todoSchema);

export default todo;
