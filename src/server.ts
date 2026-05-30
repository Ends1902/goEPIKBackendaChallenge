import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import path from "path";

import booksRoutes from "./routes/books.routes";
import { swaggerSpec } from "./swagger";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/books", booksRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});