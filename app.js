import express from "express"; 
import dotenv from "dotenv";
import "./src/models/associations.js"
import { connectDB } from "./src/config/database.js";
import roleRouter from "./src/routes/role.routes.js"; 
import personRoutes from "./src/routes/person.routes.js";
import taskRouter from "./src/routes/task.routes.js";
import userRoleRouter from "./src/routes/user.role.routes.js";
import userRouter from "./src/routes/user.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", roleRouter);
app.use("/api", personRoutes);
app.use("/api", taskRouter);
app.use("/api", userRoleRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, async () => {
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});

