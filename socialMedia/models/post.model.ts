import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IPost extends Document {
  author: IUser["_id"];
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
