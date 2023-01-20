import express from 'express';
import productsRouter from './routes/products.routes.js';
import errorMiddleware from './middlewares/errors.js';

const app = express();

app.use(express.json()); 

// Rutas de la API
app.use('/api', productsRouter); 

// Middleware para manejar los errores
console.log()
app.use(errorMiddleware);

export default app;
