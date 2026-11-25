import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Some random error");
  }
};
