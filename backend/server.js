import app from './app.js';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

dotenv.config({ path: 'backend/config/config.env' }); // Leer el archivo .env y cargar las variables de entorno

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

connectDatabase(); // Conexion a la base de datos

app.listen(PORT, () => {
	console.log(
		`Server is running on http://localhost:${PORT} in ${NODE_ENV} mode`
	);
});
