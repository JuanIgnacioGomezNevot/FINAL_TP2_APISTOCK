import { Router } from "express";
import { productoController } from "../controllers/productoController.js";

const router = Router();

router.post("/", productoController.crearProducto);
router.get("/", productoController.listarProductos);
router.get("/:id", productoController.obtenerProducto);
router.put("/:id/updateStock", productoController.incrementarStock);

export { router };
