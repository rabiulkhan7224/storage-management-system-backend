import { Router } from "express";
import { createFolder, deleteFolder, getFolder, getFolders, renameFolder } from "../controllers/folder.controller";

const router = Router();
router.put('/:id/rename', renameFolder);
router.delete('/:id', deleteFolder);
router.get('/', getFolders)
router.get('/:id', getFolder)
router.post('/', createFolder);

const folderRoutes= router;
export default folderRoutes;