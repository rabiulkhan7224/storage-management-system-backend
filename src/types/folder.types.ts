export interface IFolder {
  _id: string;
  name: string;
  parentId?: string;
  ownerId: string;
  createdAt?: Date;
}