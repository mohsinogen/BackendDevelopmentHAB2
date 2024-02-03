import express from "express"
import { saveFile } from "../controllers/files.controllers.js"
import { upload } from "../middlewares/files.middlewares.js";

const router = express.Router()

router.route('/').post(upload.single('file'), saveFile)

export default router;