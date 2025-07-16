import express from "express";
import morgan from "morgan";
import { router } from "./routes/productoRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());
app.use("/api/v1/productos", router);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
