import express from "express"; 
import dotenv from "dotenv";
import "./src/models/associations.js"
import { connectDB } from "./src/config/database.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

connectDB();

app.listen(PORT, async () => {
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});


