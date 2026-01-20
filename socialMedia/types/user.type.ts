import { Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;
