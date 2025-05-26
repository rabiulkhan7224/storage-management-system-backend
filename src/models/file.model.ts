import {  model, Schema, Types } from "mongoose";
import { IFile } from "../types/file.types";

const fileSchema = new Schema<IFile>({
  name: String,
  url: String,
  type: String,
  folderId: { type: Schema.Types.ObjectId, ref: 'Folder' },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });


const File= model<IFile>('File', fileSchema);
export default File;