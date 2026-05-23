import type { Request, Response } from "express";
import { issueService } from "./issue.service";

const createIssue=async(req:Request,res:Response)=>{
      try {
    const result = await issueService.createIssuesInToDB;
    res.status(201).json({
      success: true,
      message: "Profile created successfully!",
     
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}

export const issueController={
    createIssue,
}