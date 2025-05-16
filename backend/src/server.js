import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { authRoute } from "./routes/auth.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hii" });
});

//Routes
app.use("/auth", authRoute);

//404
app.use((req, res) => {
  res.status(404).json({ message: "404 Not Fount" });
});
const PORT = 3000;
//run
app.listen(PORT, () => {
  console.log(`Server running as http://localhost:${PORT}`);
});
