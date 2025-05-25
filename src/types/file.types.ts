import { Types } from "mongoose";

export type FileType = 'pdf' | 'image' | 'docx' | 'txt';

export interface IFile {
  _id: string;
  name: string;
  url: string;
  type: FileType;
  folderId?: string;
  ownerId: Types.ObjectId;
  createdAt?: Date;
}