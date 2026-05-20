import { Router } from "express"
import {indexHome} from "../controllers/indexControllers.js"

const indexRouter = Router();

indexRouter.get("/", indexHome)
//indexRouter.get("/:username", indexParam)

export { indexRouter };