# 📦 FINAL_TP2 – API de Gestión de Stock de Productos

Proyecto desarrollado como Trabajo Práctico Final de **Taller de Programación 2**.  
Se trata de una API RESTful construida con **Node.js y Express** para gestionar el stock de productos.

---

## 📚 Funcionalidad

La API permite:

- ✅ Crear productos  
- 📋 Listar todos los productos  
- 🔍 Obtener un producto por ID  
- 🔁 Incrementar el stock de un producto  

---

## 🧱 Estructura del Proyecto

src/
├── app.js                       # Punto de entrada
├── routes/                      # Rutas de la API
│   └── productoRoutes.js
├── controllers/                # Controladores
│   └── productoController.js
├── services/                   # Lógica de negocio
│   └── producto.service.js
├── models/                     # Validación de datos
│   └── producto.js
├── repository/                 # Acceso a los datos (persistencia en JSON)
│   └── productoRepository.js
├── utils/
│   └── JsonHandler.js          # Lectura/escritura del archivo database.json
└── data/
    └── database.json           # Archivo que simula una base de datos


---

## 🔗 Endpoints disponibles

| Método | Ruta                                   | Descripción                 |
|--------|----------------------------------------|-----------------------------|
| POST   | `/api/v1/productos`                    | Crear nuevo producto        |
| GET    | `/api/v1/productos`                    | Listar todos los productos  |
| GET    | `/api/v1/productos/:id`                | Obtener un producto por ID  |
| PUT    | `/api/v1/productos/:id/updateStock`    | Aumentar stock del producto |

---

## 📦 Dependencias utilizadas

### Runtime

- **express**: Framework principal para construir la API  
- **uuid**: Para generar identificadores únicos

### Desarrollo

- **morgan**: Logger HTTP para desarrollo  
- **@biomejs/biome**: Herramienta de formateo y análisis de código

---

## 📄 Notas

- No se usa base de datos real. Los datos se persisten en un archivo JSON (`src/data/database.json`)
- La validación se realiza en la capa de servicios, respetando una arquitectura en capas.

GRACIAS PROFESOR POR ESTE CUATRIMESTRE, ESPERO TENERLO EN ALGUNA MATERIA PROXIMA. SALUDOS!

