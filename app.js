import express from "express";
import { startDB } from "./src/config/database.js"; 
import dotenv from "dotenv";
import tasksRoutes from "./src/routes/tasks.routes.js";
//import usersRoutes from "./src/routes/users.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

 app.use(express.json());

 app.use("/api/tasks", tasksRoutes );
  app.use("/api/users", tasksRoutes );
 
 app.get("/", (req, res ) => {
    res.send("Bienvenido a crud");
 });
// app.use("/api", usersRoutes);



app.listen(PORT, async ()=>{
    await startDB ();
    console.log(` Servidor en funcionamiento. ${PORT} `)
});