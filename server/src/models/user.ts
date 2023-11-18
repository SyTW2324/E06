import { Document, Schema, model } from "mongoose";

export interface UserDocumentInterface extends Document {
  email: string;
  username: string;
  name: string;
  password: string;
  image: string;
}

const UserSchema = new Schema<UserDocumentInterface>({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

export const User = model<UserDocumentInterface>("User", UserSchema);
