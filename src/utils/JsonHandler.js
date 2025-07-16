import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data/database.json");

export const JsonHandler = {
	read: async () => {
		try {
			const data = await fs.readFile(filePath, "utf-8");
			return JSON.parse(data || "[]");
		} catch (error) {
			console.error("Error leyendo la base de datos:", error.message);
			return [];
		}
	},

	write: async (data) => {
		try {
			await fs.writeFile(filePath, JSON.stringify(data, null, 2));
		} catch (error) {
			console.error("Error escribiendo en la base de datos:", error.message);
		}
	},
};
