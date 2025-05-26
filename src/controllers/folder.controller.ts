import { Request, Response } from "express";
import Folder from "../models/folder.model";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { _id: string };
    }
  }
}

export const createFolder = async (req: Request, res: Response) => {

  const folder = await Folder.create({ ...req.body, ownerId: req.user!._id });
  res.status(201).json(folder);
};

export const renameFolder = async (req: Request, res: Response) => {
  const folder = await Folder.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
  res.json(folder);
};

export const deleteFolder = async (req: Request, res: Response) => {
  await Folder.findByIdAndDelete(req.params.id);
  res.status(204).send("Folder deleted successfully");
};