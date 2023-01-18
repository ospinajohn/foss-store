import express from 'express';
import productsRouter from './routes/products.routes.js';

const app = express();

app.use(express.json()); 

// Rutas de la API
app.use('/api', productsRouter); 

export default app;
