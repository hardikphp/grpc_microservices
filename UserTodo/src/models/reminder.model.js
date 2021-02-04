import { Schema, model } from "mongoose";

const reminderSchema = new Schema({
  date: { type: Date },
  todo: { type: Schema.Types.ObjectId, ref: "Todo" },
  notifyTo: [{ type: Schema.Types.ObjectId, ref: "User" }],
  isSent: [{ type: Boolean, default: false }],
});

const reminder = new model("Reminder", reminderSchema);

export default reminder;
