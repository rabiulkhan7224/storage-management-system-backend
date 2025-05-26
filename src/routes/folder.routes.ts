import { Router } from "express";
import { createFolder, deleteFolder, getFolder, getFolders, renameFolder } from "../controllers/folder.controller";

const router = Router();
router.post('/', createFolder);
router.put('/:id/rename', renameFolder);
router.delete('/:id', deleteFolder);
router.get('/', getFolders)
router.get('/:id', getFolder)
const folderRoutes= router;
export default folderRoutes;