import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());
//Sempre que tiver uma rota em categoriesRoutes, vai iniciar com esse path
app.use("/categories", categoriesRoutes);

app.listen(8080);
