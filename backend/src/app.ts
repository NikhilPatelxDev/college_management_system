import express, { Express, Request, Response } from "express";

const app: Express = express();

// IMP middlewares for request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/v1/health", (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toLocaleString(),
  });
});

export default app;
