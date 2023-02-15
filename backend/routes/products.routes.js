import { Router } from 'express';
import {
  deleteProduct,
	getProductById,
	getProducts,
	newProduct,
	updateProduct,
} from '../controllers/productsController.js';

const router = Router();


// Rutas para productos (CRUD)
router.get('/products', getProducts); // Obtener todos los productos
router.get('/product/:id', getProductById); // Obtener un producto por ID
router.post('/product/new', newProduct); // Crear producto - ADMIN
router.put('/product/:id', updateProduct); // Actualizar un producto por ID - ADMIN
router.delete('/product/:id', deleteProduct); // Eliminar un producto por ID - ADMIN

export default router;
