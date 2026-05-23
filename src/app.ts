import express, { type Application, type Request, type Response } from "express"
import { userRoute } from "./modules/user/user.route";
import { authRouter } from "./modules/auth/auth.route";
import { issuesRouter } from "./modules/issue/issue.route";

const port = 3000;
const app:Application = express();

app.use(express.json())

app.use("/api/auth/signup",userRoute);
app.use("/api/auth/login",authRouter);
app.use("/api/issues",issuesRouter);
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        mesage:"Welcome to the DEVPULSE."
    })
})



export default app;