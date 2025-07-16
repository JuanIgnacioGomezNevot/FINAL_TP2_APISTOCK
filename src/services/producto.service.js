import { v4 as uuidv4 } from "uuid";
import { productoRepository } from "../repository/productoRepository.js";
import { validarProducto, validarIncrementoStock } from "../models/producto.js";

export const productoService = {
	crearProducto: async (data) => {
		validarProducto(data);
		const nuevoProducto = {
			id: uuidv4(),
			producto: data.producto,
			stockAmount: data.stockAmount,
			fechaIngreso: data.fechaIngreso || new Date().toISOString(),
		};
		return await productoRepository.createOne(nuevoProducto);
	},

	listarProductos: async () => await productoRepository.getAll(),

	obtenerProducto: async (id) => await productoRepository.getById(id),

	incrementarStock: async (id, cantidad) => {
		validarIncrementoStock(cantidad);
		return await productoRepository.updateStockById(id, cantidad);
	},
};
