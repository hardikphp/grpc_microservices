import { todoModel } from "../models";

const addTodo = async (data) => {
  let newTodo = {},
    saveTodo = null;
  newTodo = new todoModel(data);
  saveTodo = await newTodo.save();
  return saveTodo;
};

const updateTodo = async (id, update) => {
  let data = await todoModel.findOneAndUpdate({ _id: id }, update);
  return data;
};

const findTodo = async () => {
  let data = await todoModel.find(
    { isActive: true, isDeleted: false },
    { addedBy: 1, assignedTo: 1, task: 1, desc: 1 }
  );
  return data;
};

export default {
  addTodo,
  updateTodo,
  findTodo,
};
