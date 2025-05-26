import { Router } from "express";
import { createFile, deleteFile, duplicateFile, getFile, getFiles, getFilesByDate, getFilesByFolder, getFilesBySearch, getFilesByType, renameFile } from "../controllers/file.controller";

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



// getFilesBySearch
router.get('/search',  getFilesBySearch); // সার্চ কোয়েরি দিয়ে ফাইল পাওয়া
router.get('/by-date',  getFilesByDate); // তারিখ অনুযায়ী ফাইল পাওয়া
router.get('/by-type',  getFilesByType); // টাইপ অনুযায়ী ফাইল পাওয়া
router.get('/folder/:folderId', getFilesByFolder);
router.get('/',getFiles)
router.get('/:id',getFile)









const fileRoutes = router;
export default fileRoutes;