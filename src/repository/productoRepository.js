import { JsonHandler } from "../utils/JsonHandler.js";

export const productoRepository = {
	getById: async (id) => {
		const productos = await JsonHandler.read();
		return productos.find((p) => p.id === id) || null;
	},

	getAll: async () => {
		return await JsonHandler.read();
	},

	createOne: async (producto) => {
		const productos = await JsonHandler.read();
		productos.push(producto);
		try {
			await JsonHandler.write(productos);
			return producto;
		} catch (error) {
			console.error("Error al guardar producto:", error.message);
			throw error;
		}
	},

	updateStockById: async (id, cantidad) => {
		const productos = await JsonHandler.read();
		const index = productos.findIndex((p) => p.id === id);

		if (index === -1) throw new Error("Producto no encontrado");

		productos[index].stockAmount += cantidad;

		try {
			await JsonHandler.write(productos);
			return productos[index];
		} catch (error) {
			console.error("Error al actualizar producto:", error.message);
			throw error;
		}
	},
};
