import { model, Schema } from "mongoose";
import { IFolder } from "../types/folder.types";

const folderSchema = new Schema<IFolder>({
  name: String,
  parentId: { type: Schema.Types.ObjectId, ref: 'Folder' },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Folder= model<IFolder>('Folder', folderSchema);
export default Folder;