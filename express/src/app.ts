import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { createAuth } from "./lib/auth";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

createAuth()
  .then((auth) => {
    app.all("/api/auth/*splat", toNodeHandler(auth));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
