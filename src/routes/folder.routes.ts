import { Router } from "express";
import { createFolder, deleteFolder, renameFolder } from "../controllers/folder.controller";

const router = Router();
router.post('/', createFolder);
router.put('/:id/rename', renameFolder);
router.delete('/:id', deleteFolder);
const folderRoutes= router;
export default folderRoutes;