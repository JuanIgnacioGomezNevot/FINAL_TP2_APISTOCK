import { productoService } from "../services/producto.service.js";

export const productoController = {
	crearProducto: async (req, res) => {
		try {
			const nuevoProducto = await productoService.crearProducto(req.body);
			res.status(201).json(nuevoProducto);
		} catch (err) {
			res.status(400).json({ error: err.message });
		}
	},

	listarProductos: async (req, res) => {
		const productos = await productoService.listarProductos();
		res.json(productos);
	},

	obtenerProducto: async (req, res) => {
		const producto = await productoService.obtenerProducto(req.params.id);
		if (!producto) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json(producto);
	},

	incrementarStock: async (req, res) => {
		try {
			const producto = await productoService.incrementarStock(
				req.params.id,
				req.body.cantidad,
			);
			res.json(producto);
		} catch (err) {
			res.status(400).json({ error: err.message });
		}
	},
};
