import mongoose, { Schema } from "mongoose";
import ITodo from "../types/todo.type";

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      default: "",
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Todo = mongoose.model<ITodo>("Todo", todoSchema);