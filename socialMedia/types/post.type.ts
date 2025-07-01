import { Document } from "mongoose";

interface IPost extends Document {
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IPost;
