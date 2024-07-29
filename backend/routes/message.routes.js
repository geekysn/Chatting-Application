import express from "express"
import { sendMessage } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter.post('/send/:id', sendMessage);

export default messageRouter;