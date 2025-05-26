import { Router } from "express";
import { createFile, deleteFile, duplicateFile, renameFile } from "../controllers/file.controller";

const router = Router();
router.post('/', createFile);
router.put('/:id/rename', renameFile);
router.post('/:id/duplicate', duplicateFile);
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteFile(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete file' });
    }
});

const fileRoutes = router;
export default fileRoutes;