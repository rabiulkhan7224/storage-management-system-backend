import { Types } from "mongoose";

export interface IFolder {
  _id: string;
  name: string;
  parentId?: Types.ObjectId;
  ownerId: Types.ObjectId;
  createdAt?: Date;
}