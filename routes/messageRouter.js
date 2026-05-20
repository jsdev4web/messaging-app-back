import { Router } from "express"
import { messageHome, messageAction, messageActionGet, messageClear } from "../controllers/messageControllers.js"

const messageRouter = Router();

messageRouter.get("/", messageHome)
messageRouter.post("/action", messageAction)
messageRouter.get("/action", messageActionGet)
messageRouter.get("/clear", messageClear)


export { messageRouter };