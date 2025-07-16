export const validarProducto = (data) => {
	if (!data.producto || typeof data.producto !== "string") {
		throw new Error('El campo "producto" es obligatorio y debe ser string');
	}
	if (!Number.isInteger(data.stockAmount) || data.stockAmount < 0) {
		throw new Error('El "stockAmount" debe ser un entero mayor o igual a 0');
	}
};

export const validarIncrementoStock = (cantidad) => {
	if (!Number.isInteger(cantidad) || cantidad < 1) {
		throw new Error("La cantidad mínima para incrementar stock es 1");
	}
};
