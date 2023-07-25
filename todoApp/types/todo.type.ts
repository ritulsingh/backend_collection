import { Document } from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default ITodo;