import express, { type Application, type Request, type Response } from "express"

const port = 3000;
const app:Application = express();

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        mesage:"Welcome to the DEVPULSE."
    })
})



export default app;