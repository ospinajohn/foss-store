import express from 'express';
import productsRouter from './routes/products.routes.js';
import errorMiddleware from './middlewares/errors.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Rutas de la API
app.use('/api', productsRouter);

// Middleware para manejar los errores
console.log();
app.use(errorMiddleware);

export default app;
