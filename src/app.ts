import express, { type Application, type Request, type Response } from "express"
import { userRoute } from "./modules/user/user.route";

const port = 3000;
const app:Application = express();

app.use(express.json())

app.use("/api/auth/signup",userRoute)
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        mesage:"Welcome to the DEVPULSE."
    })
})



export default app;