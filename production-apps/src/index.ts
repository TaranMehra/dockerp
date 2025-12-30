import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app = express();

const port = Number(process.env.PORT) || 4000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000", "http://72.61.240.214:5173"],
    credentials: true,
    // methods: ["GET", "POST"], //WHAT KIND OF REQUEST SHOULD MY APP ACCEPT
    // allowedHeaders:["Content-Type", "Authorization"] //Header save from crawls
  })
);

app.get("/api/user", (req: Request, res: Response) => {
  res.json({ name: "taransingh", instance: port });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is listen on ${port}`);
});
