
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
export const getFile = async (req: Request, res: Response) => {
    const { id } = req.params;
    const file = await File.findById(id);
    if (!file) {
        res.status(404).json({ error: 'File not found' });
        return;
    }   
    res.json(file);
};
export const getFiles = async (req: AuthenticatedRequest, res: Response) => {
    const files = await File.find({ ownerId: req.user!._id });
    res.json(files);
};
export const getFilesByFolder = async (req: AuthenticatedRequest, res: Response) => {
    const { folderId } = req.params;
    const files = await File.find({ ownerId: req.user!._id, folderId });
    res.json(files);
};
// getFilesBySearch
// api/files/search?search=example
export const getFilesBySearch = async (req: AuthenticatedRequest, res: Response) => {
    const { search } = req.query;
    if (!search || typeof search !== 'string' || !search.trim()) {
         res.status(400).json({ error: 'Search query is required' });
         return
    }
    const files = await File.find({
        ownerId: req.user!._id,
        name: { $regex: search, $options: 'i' }
    });
    res.json(files);
};

// date by getFilesByDate
export const getFilesByDate = async (req: AuthenticatedRequest, res: Response) => { 
    const { date } = req.query;
    console.log("date", date);
    // to string date 
    if (!date) {
        res.status(400).json({ error: 'Date is required' });
        return;
    }
    const files = await File.find({
        ownerId: req.user!._id,
        createdAt: {
            $gte: new Date(date as string),
            $lt: new Date(new Date(date as string).setDate(new Date(date as string).getDate() + 1))
        }
    });
    res.json(files);
}


// api/files/date?date=2023-10-01
export const getFilesByType = async (req: AuthenticatedRequest, res: Response) => {
    const { type } = req.query;
    // const{type}=req.body
    if (!type) {
        res.status(400).json({ error: 'Type is required' });
        return;
    }
    const files = await File.find({
        ownerId: req.user!._id,
        type: type as string
    });
    res.json(files);
};