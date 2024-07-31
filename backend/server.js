import express from "express";
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import connectToMongo from "./db/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.listen(PORT, ()=> {
    connectToMongo();
    console.log(`app is listening on ${PORT}`)
})