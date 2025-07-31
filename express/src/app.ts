import express, { type Request, type Response } from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "@/lib/auth";
import { authMiddleware } from "@/middleware/auth.middleware";
import { z } from "zod";

const app = express();
const port = 3005;

const userSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get(
  "/api/protected",
  authMiddleware,
  async (req: Request, res: Response) => {
    res.json({ message: "Protected API" });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
