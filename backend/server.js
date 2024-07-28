import express from "express";
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js";
import connectToMongo from "./db/db.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
app.get('/',(req, res)=>{
    console.log("hello world");
    res.send("hello, world")
})

app.use("/api/auth", authRouter)

app.listen(PORT, ()=> {
    connectToMongo();
    console.log(`app is listening on ${PORT}`)
})