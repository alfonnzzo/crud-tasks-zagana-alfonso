import express from "express"; 
import "dotenv/config" 
import tasksRoutes from "./src/routes/task.routes.js";
import usersRoutes from "./src/routes/user.routes.js";
import rolsRoutes from "./src/routes/role.routes.js";
import documentRoutes from "./src/routes/document.routes.js";
import { startDb } from "./src/config/database.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json()); 
app.set("json spaces", 2); //para que los json se vean mas prolijos


app.use("/api", tasksRoutes);
app.use("/api", usersRoutes);

//rutas nuevas
app.use("/api", rolsRoutes);
app.use("/api", documentRoutes);

const startServer = async () => {
     await startDb(); 
     console.log("Tablas creadas");
     
}

app.get("/", (req, res) =>  {
  res.send ("Servidor listo")

})

app.listen(PORT, async () => {
  console.log(`El server está corriendo en:  http://localhost:${PORT}`);
});

startServer();