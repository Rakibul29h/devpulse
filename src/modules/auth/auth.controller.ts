import type { Request, Response } from "express"
import sendResponse from "../../utility/sendResponse"
import { authService } from "./auth.service";

const userLogin= async(req:Request, res:Response)=>{

  try {
    const result = await authService.loginUserIntoDB(req.body)

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User loged in  successfully!",
  
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
        
}

export const authController={
    userLogin,
}