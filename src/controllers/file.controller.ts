
// Extend the Request interface to include 'user'
import { Request, Response } from "express";
import File from "../models/file.model";

interface AuthenticatedRequest extends Request {
    user?: { _id: string };
}

export const createFile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const file = await File.create({ ...req.body, ownerId: req.user!._id });
        res.status(201).json(file);
    } catch (err) {
        res.status(500).json({ error: 'File upload failed' });
    }
};
export const renameFile = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const file = await File.findByIdAndUpdate(id, { name }, { new: true });
    res.json(file);
};


export const duplicateFile = async (req: Request, res: Response) => {
    const original = await File.findById(req.params.id);
    if (!original) {
        res.status(404).json({ error: 'File not found' });
        return;
    }
    const copy = await File.create({ ...original.toObject(), _id: undefined, name: original.name + ' copy' });
    res.status(201).json(copy);
};

export const deleteFile = async (req: Request, res: Response) => {
    const { id } = req.params;
    const file = await File.findByIdAndDelete(id);
    if (!file) {
        res.status(404).json({ error: 'File not found' });
        return;
    }


    res.json({ message: 'File deleted successfully' });
}