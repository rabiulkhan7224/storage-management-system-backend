import { Types } from "mongoose";

export type FileType = 'pdf' | 'image' | 'docx' | 'txt';

export interface IFile {
  _id: string;
  name: string;
  url: string;
  type: FileType;
  folderId?: Types.ObjectId;
  ownerId: Types.ObjectId;
  createdAt?: Date;
}