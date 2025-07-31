import { Request, Response, NextFunction } from "express";
import { auth } from "@/lib/auth";

declare global {
  namespace Express {
    interface Request {
      session: NonNullable<Awaited<ReturnType<typeof auth.api.getSession>>>;
    }
  }
}
