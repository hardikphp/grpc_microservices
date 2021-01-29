import { reminderModel } from "../models";

const addReminder = async (data) => {
  let newReminder = {},
    saveReminder = null;
  newReminder = new reminderModel(data);
  saveReminder = await newReminder.save();
  return saveReminder;
};

export default {
  addReminder,
};
