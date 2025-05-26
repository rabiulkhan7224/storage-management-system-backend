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
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ error: "Name is required" });
        return;
    }

    const folderexists = await Folder.findById(id);

    if (!folderexists) {
        res.status(404).json({ error: "Folder not found" });
        return;
    }
    const folder = await Folder.findByIdAndUpdate(id, { name: name }, { new: true });
    res.json(folder);
};

export const deleteFolder = async (req: Request, res: Response) => {
    await Folder.findByIdAndDelete(req.params.id);
    res.status(204).send("Folder deleted successfully");
};
export const getFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const folder = await Folder.findById(id);
    if (!folder) {
        res.status(404).json({ error: 'Folder not found' });
        return;
    }
    res.json(folder);
}
export const getFolders = async (req: Request, res: Response) => {
    const folders = await Folder.find({ ownerId: req.user!._id });
    res.json(folders);
}