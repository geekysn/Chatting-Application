import express from "express"
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = express.Router();

messageRouter.get('/:id', protectRoute, getMessages);
messageRouter.post('/send/:id', protectRoute, sendMessage);

export default messageRouter;